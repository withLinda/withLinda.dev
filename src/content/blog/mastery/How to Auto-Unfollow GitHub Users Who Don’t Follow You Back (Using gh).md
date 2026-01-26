---
title: "How to Auto-Unfollow GitHub Users Who Don’t Follow You Back (Using gh)"
description: "Find GitHub accounts that don’t follow you back and unfollow them safely using the GitHub CLI (gh) and the API."
pubDate: "2026-01-26"
---

# How to Auto-Unfollow GitHub Users Who Don’t Follow You Back (Using `gh`)

If you follow many GitHub accounts, it can be hard to see who still follows you back. Checking profiles one by one is slow. A better way is to use the GitHub API (through the GitHub CLI, `gh`) to compare two lists:

- **Following** = people you follow  
- **Followers** = people who follow you  

Anyone who is in *Following* but not in *Followers* is a “not following back” account.

This guide shows a clean method to find them and unfollow them automatically.

---

## Why use the GitHub CLI + API (instead of scraping)
You *could* scrape GitHub HTML pages, but it’s not the best choice because:

- The page HTML can change anytime and break your script.
- You must handle pagination, login cookies, and rate limits.
- It’s more fragile and more work.

Using the GitHub API is better because:

- It’s stable and intended for automation.
- `gh` handles authentication and pagination nicely.
- You get clean data (usernames) without parsing HTML.

---

## What you need (one time setup)

### 1) Install GitHub CLI
On macOS (Homebrew):
```bash
brew install gh
```

### 2) Login with `gh`
```bash
gh auth login
```

### 3) Make sure you have the right permission to unfollow
Unfollowing needs extra permission. If you see an error about scope, run:

```bash
gh auth refresh -h github.com -s user
```

---

## Step 1 — Get the list of “not following back” users

This command prints usernames you follow **who do not follow you back**:

```bash
comm -23 \
  <(gh api --paginate /user/following --jq '.[].login' | sort) \
  <(gh api --paginate /user/followers  --jq '.[].login' | sort)
```

### What it does (simple explanation)
- `gh api --paginate /user/following` gets everyone you follow (all pages).
- `gh api --paginate /user/followers` gets everyone who follows you.
- `--jq '.[].login'` extracts only usernames.
- `sort` is required because `comm` compares sorted lists.
- `comm -23` means: “show lines only in the first list” (following) “but not in the second” (followers).

---

## Step 2 — Do a “dry run” (recommended)
Before unfollowing, save the list and review it:

```bash
comm -23 \
  <(gh api --paginate /user/following --jq '.[].login' | sort) \
  <(gh api --paginate /user/followers  --jq '.[].login' | sort) \
  > not-following-back.txt

cat not-following-back.txt
```

If the list looks correct, continue.

---

## Step 3 — Unfollow them automatically (safe bulk version)

This script unfollows each username and prints **OK** or **FAILED**:

```bash
export GH_PAGER=cat
set +e 2>/dev/null
setopt NO_ERREXIT 2>/dev/null

while IFS= read -r u; do
  [[ -z "$u" ]] && continue
  printf "Unfollowing %s ... " "$u"

  gh api -X DELETE "/user/following/$u" --silent </dev/null
  rc=$?

  if [[ $rc -eq 0 ]]; then
    echo "OK"
  else
    echo "FAILED (exit $rc)"
  fi

  sleep 0.5
done < not-following-back.txt
```

---

## Why some “simple scripts” fail after the first unfollow

Many people try something like this:

```bash
while read -r u; do
  gh api -X DELETE "/user/following/$u"
done < not-following-back.txt
```

Sometimes it unfollows only one user. Common reasons:

### 1) The shell stops on the first error
Some shells (or shell configs) stop a script when a command fails (this is called “exit on error”).  
If one unfollow request returns a non-zero exit code (for example: temporary rate limiting), the loop can stop early.

The safer script turns that behavior off and handles errors manually.

### 2) GitHub blocks actions done too fast (“secondary rate limit”)
If you unfollow many users very quickly, GitHub may slow you down or block some requests temporarily.
That’s why the script includes:

```bash
sleep 0.5
```

### 3) `gh` can behave differently with interactive paging
`gh` sometimes uses a pager (like `less`). In scripts, that can cause weird behavior.
This is why we use:

```bash
export GH_PAGER=cat
```

### 4) Some tools can accidentally read from stdin
In loops that read from a file, a command inside the loop may also read stdin and “steal” input.
Redirecting stdin to `/dev/null` for that command prevents that:

```bash
... </dev/null
```

Not every system needs this, but it’s a good safety habit.

---

## One-block “do everything” command (no manual file step)

This version fetches followers + following, compares them, and unfollows in one run:

```bash
export GH_PAGER=cat
set +e 2>/dev/null
setopt NO_ERREXIT 2>/dev/null

tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT

gh api --paginate /user/following --jq '.[].login' | sort > "$tmpdir/following.txt"
gh api --paginate /user/followers  --jq '.[].login' | sort > "$tmpdir/followers.txt"

comm -23 "$tmpdir/following.txt" "$tmpdir/followers.txt" \
| while IFS= read -r u; do
    [[ -z "$u" ]] && continue
    printf "Unfollowing %s ... " "$u"
    gh api -X DELETE "/user/following/$u" --silent </dev/null
    rc=$?
    [[ $rc -eq 0 ]] && echo "OK" || echo "FAILED (exit $rc)"
    sleep 0.5
  done
```

---

## Safety tips
- Always do a dry run first.
- If you follow hundreds of accounts, keep a small delay (`sleep 0.5` or `sleep 1`).
- If many requests fail, stop and try again later (rate limiting).
- If you get permission errors, refresh scopes:
  ```bash
  gh auth refresh -h github.com -s user
  ```

---
