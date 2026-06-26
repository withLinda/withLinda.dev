/**
 * Remark plugin: strip the very first H1 in a markdown body.
 *
 * The blog layout renders the post title from frontmatter as the page H1.
 * Many posts also start the body with `# Title`, which produces a duplicate
 * heading (semantic problem — two H1s — and a visible repeat).
 *
 * This transformer drops the leading H1 when it is the first non-empty node.
 * Other H1s (rare, usually section labels in test docs) are preserved.
 */
export default function remarkStripFirstH1() {
  return (tree) => {
    if (!tree?.children?.length) return
    const first = tree.children[0]
    if (first?.type === 'heading' && first.depth === 1) {
      tree.children.shift()
    }
  }
}
