import type { ComponentType } from 'react'

export type WorkFrontmatter = {
  title: string
  slug: string
  client?: string
  role?: string
  year?: string
  summary?: string
  cover?: string
  tags?: string[]
  metrics?: { label: string; value: string }[]
  team?: string[]
  draft?: boolean
  order?: number
}

export type BlogFrontmatter = {
  title: string
  slug: string
  date: string
  summary?: string
  tags?: string[]
  draft?: boolean
}

export type MdxModule<T> = {
  default: ComponentType<Record<string, unknown>>
  frontmatter: T
}

const workModules = import.meta.glob<MdxModule<WorkFrontmatter>>(
  '../content/work/*.mdx',
  { eager: true },
)

const blogModules = import.meta.glob<MdxModule<BlogFrontmatter>>(
  '../content/blog/*.mdx',
  { eager: true },
)

function filepathToSlug(filepath: string): string {
  const file = filepath.split('/').pop() ?? ''
  return file.replace(/\.mdx$/, '')
}

export type WorkItem = {
  slug: string
  Component: ComponentType<Record<string, unknown>>
  frontmatter: WorkFrontmatter
}

export type BlogItem = {
  slug: string
  Component: ComponentType<Record<string, unknown>>
  frontmatter: BlogFrontmatter
}

export function getAllWork(): WorkItem[] {
  return Object.entries(workModules)
    .map(([path, mod]) => ({
      slug: mod.frontmatter?.slug ?? filepathToSlug(path),
      Component: mod.default,
      frontmatter: mod.frontmatter,
    }))
    .filter((item) => !item.frontmatter?.draft)
    .sort((a, b) => {
      const ao = a.frontmatter?.order ?? -Infinity
      const bo = b.frontmatter?.order ?? -Infinity
      return bo - ao
    })
}

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return getAllWork().find((w) => w.slug === slug)
}

export function listWorkSlugs(): string[] {
  return getAllWork().map((w) => `/work/${w.slug}`)
}

export function getAllBlog(): BlogItem[] {
  return Object.entries(blogModules)
    .map(([path, mod]) => ({
      slug: mod.frontmatter?.slug ?? filepathToSlug(path),
      Component: mod.default,
      frontmatter: mod.frontmatter,
    }))
    .filter((item) => !item.frontmatter?.draft)
    .sort((a, b) => {
      const ad = a.frontmatter?.date ? new Date(a.frontmatter.date).getTime() : 0
      const bd = b.frontmatter?.date ? new Date(b.frontmatter.date).getTime() : 0
      return bd - ad
    })
}

export function getBlogBySlug(slug: string): BlogItem | undefined {
  return getAllBlog().find((b) => b.slug === slug)
}

export function listBlogSlugs(): string[] {
  return getAllBlog().map((b) => `/blog/${b.slug}`)
}
