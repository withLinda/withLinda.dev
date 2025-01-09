
---
layout: ../../../layouts/BlogPost.astro
title: "Guide to Setting Up Cloudflare R2"
description: "A comprehensive guide on setting up Cloudflare R2 storage, obtaining necessary credentials, and understanding its free tier benefits with step-by-step instructions"
pubDate: "2024-01-17"
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
---

#  Guide to Setting Up Cloudflare R2

## Prerequisites Understanding
Before we begin, it's important to understand that:
- Cloudflare R2 is an S3-compatible object storage service
- There's a generous free tier (10GB storage, 1M Class A operations, 10M Class B operations)
- No egress fees (this is a major advantage over AWS S3)

## Step 1: Account Setup
1. First, you'll need a Cloudflare account
   - Go to https://dash.cloudflare.com/sign-up
   - If you already have an account, simply log in
   - Verify your email address if you're creating a new account

## Step 2: Enable R2
1. Log into Cloudflare dashboard
2. Look for "R2" in the left sidebar
   - If you don't see it, click "Workers & Pages"
   - Then look for "R2" under the storage section
3. Click on "R2"
4. You might need to set up billing even for free tier
   - Add a credit card (won't be charged within free tier limits)
   - Choose a payment method

## Step 3: Create Your First Bucket
1. In the R2 dashboard:
   - Click "Create bucket"
   - Choose a unique bucket name (this will be part of your URL)
   - Names must be:
     - Lowercase letters
     - Numbers
     - Hyphens
     - Between 3-63 characters
2. Select your preferred settings:
   - Location (usually "Automatic" is fine)
   - Early Expiration settings (optional)
3. Click "Create bucket"

## Step 4: Getting Your Credentials
This is the crucial part where you get your Access Key, Secret, and Endpoint.

1. Navigate to R2 Settings:
   - Click on "R2" in sidebar
   - Look for "Manage R2 API Tokens"

2. Create an API Token:
   - Click "Create API Token"
   - Give it a descriptive name
   - Choose permissions:
     - For full access: "Admin Read & Write"
     - For limited access: Choose specific permissions

3. Important Credentials to Note:
   - Access Key ID (appears like: XXXXXXXXXXXXX)
   - Secret Access Key (appears like: XXXXXXXXXXXXXXXXXXXXXXXXXXXXX)
   - Account ID (found in the URL when you're in the Cloudflare dashboard)
   - Endpoint URL format: https://<account_id>.r2.cloudflarestorage.com
   
## Step 5: Endpoint Construction
Your R2 endpoint will be constructed as follows:
- Public endpoint: `https://<account_id>.r2.cloudflarestorage.com`
- Your Account ID can be found in your Cloudflare dashboard URL
- Make note of your bucket name as you'll need it for configurations

## Important Security Considerations
1. Never share or expose your Secret Access Key
2. Store credentials securely (use environment variables)
3. Consider using IP restrictions on your API tokens
4. Implement proper bucket policies if needed

## Usage Limits to Keep in Mind
- Free tier includes:
  - 10GB storage
  - 1 million Class A operations (PUT, POST, DELETE)
  - 10 million Class B operations (GET, HEAD)
  - No egress fees

## Verification Steps
After setting everything up, you should have:
1. Access Key ID
2. Secret Access Key
3. Bucket name
4. Endpoint URL
5. Account ID

To verify your setup is working:
1. Test your credentials using the AWS CLI (R2 is S3-compatible)
2. Try uploading a test file
3. Verify you can access the uploaded file

## Common Issues and Troubleshooting
1. If endpoints don't work:
   - Double-check your Account ID
   - Verify the endpoint URL format
   
2. If uploads fail:
   - Verify API token permissions
   - Check bucket name spelling
   - Confirm credentials are correct

3. If access is denied:
   - Verify token permissions
   - Check IP restrictions if set
   - Confirm bucket policies

This setup process provides you with everything needed to start using R2 in your applications. Remember to keep your credentials secure and never commit them directly to your code repository. Use environment variables or secure secrets management systems instead.