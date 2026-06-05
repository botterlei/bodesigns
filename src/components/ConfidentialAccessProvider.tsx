import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useNavigate } from 'react-router-dom'
import {
  isConfidentialUnlocked,
  setConfidentialUnlocked,
  verifyConfidentialPassword,
} from '@/lib/confidential-access'
import ConfidentialLoginModal from './ConfidentialLoginModal'

type ConfidentialAccessContextValue = {
  unlocked: boolean
  loginOpen: boolean
  openLogin: (returnPath?: string) => void
  closeLogin: () => void
  login: (password: string) => boolean
  logout: () => void
}

const ConfidentialAccessContext =
  createContext<ConfidentialAccessContextValue | null>(null)

export function useConfidentialAccess(): ConfidentialAccessContextValue {
  const ctx = useContext(ConfidentialAccessContext)
  if (!ctx) {
    throw new Error('useConfidentialAccess must be used within ConfidentialAccessProvider')
  }
  return ctx
}

export default function ConfidentialAccessProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const [unlocked, setUnlocked] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [returnPath, setReturnPath] = useState<string | null>(null)

  useEffect(() => {
    setUnlocked(isConfidentialUnlocked())
  }, [])

  const openLogin = useCallback((path?: string) => {
    setReturnPath(path ?? null)
    setLoginOpen(true)
  }, [])

  const closeLogin = useCallback(() => {
    setLoginOpen(false)
    setReturnPath(null)
  }, [])

  const login = useCallback(
    (password: string) => {
      const ok = verifyConfidentialPassword(password)
      if (!ok) return false

      setConfidentialUnlocked(true)
      setUnlocked(true)
      setLoginOpen(false)

      if (returnPath) {
        navigate(returnPath)
        setReturnPath(null)
      }

      return true
    },
    [navigate, returnPath],
  )

  const logout = useCallback(() => {
    setConfidentialUnlocked(false)
    setUnlocked(false)
  }, [])

  const value = useMemo(
    () => ({
      unlocked,
      loginOpen,
      openLogin,
      closeLogin,
      login,
      logout,
    }),
    [unlocked, loginOpen, openLogin, closeLogin, login, logout],
  )

  return (
    <ConfidentialAccessContext.Provider value={value}>
      {children}
      <ConfidentialLoginModal
        open={loginOpen}
        onClose={closeLogin}
        onLogin={login}
      />
    </ConfidentialAccessContext.Provider>
  )
}
