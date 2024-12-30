/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Shared types (create as src/types.ts)
export interface Post {
  title: string
  description: string
  createdAt?: string
  updatedAt?: string
  heroImage?: string
  tags: string[]
}

export interface SiteConfig {
  SITE_TITLE: string
  SITE_DESCRIPTION: string
  ABOUT_URL: string
}
