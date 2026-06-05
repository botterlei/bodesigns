import type { WorkFrontmatter } from './content'

const STORAGE_KEY = 'bodesigns_confidential_unlocked'

export function isConfidentialWork(frontmatter: WorkFrontmatter): boolean {
  if (frontmatter.confidential === true) return true
  if (frontmatter.confidential === false) return false
  return frontmatter.client?.toLowerCase().includes('workday') ?? false
}

export function isConfidentialUnlocked(): boolean {
  if (typeof window === 'undefined') return false
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

export function setConfidentialUnlocked(unlocked: boolean): void {
  if (typeof window === 'undefined') return
  try {
    if (unlocked) {
      localStorage.setItem(STORAGE_KEY, '1')
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  } catch {
    // ignore quota / private mode
  }
}

export function verifyConfidentialPassword(password: string): boolean {
  const expected = import.meta.env.VITE_CONFIDENTIAL_ACCESS_PASSWORD
  if (!expected) {
    if (import.meta.env.DEV) {
      console.warn(
        'VITE_CONFIDENTIAL_ACCESS_PASSWORD is not set. Add it to .env.local to enable confidential work login.',
      )
    }
    return false
  }
  return password === expected
}
