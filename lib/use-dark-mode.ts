import useDarkModeImpl from '@fisch0920/use-dark-mode'

const safeStorage = {
  getItem: (key: string) => {
    if (typeof window === 'undefined') return null
    return window.localStorage.getItem(key)
  },
  setItem: (key: string, value: string) => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(key, value)
  },
  removeItem: (key: string) => {
    if (typeof window === 'undefined') return
    window.localStorage.removeItem(key)
  },
  get localStorage() {
    return this
  }
}

export function useDarkMode() {
  const darkMode = useDarkModeImpl(false, { 
    classNameDark: 'dark-mode',
    storageProvider: safeStorage as any
  })

  return {
    isDarkMode: darkMode.value,
    toggleDarkMode: darkMode.toggle
  }
}
