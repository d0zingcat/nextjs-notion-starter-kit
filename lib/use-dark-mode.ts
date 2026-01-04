import useDarkModeImpl from '@fisch0920/use-dark-mode'

// Create a safe storage wrapper for SSR compatibility
const createSafeStorage = () => {
  if (typeof window === 'undefined') {
    return {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    }
  }
  
  // The library expects an object with a localStorage property
  return {
    getItem: (key: string) => window.localStorage.getItem(key),
    setItem: (key: string, value: string) => window.localStorage.setItem(key, value),
    removeItem: (key: string) => window.localStorage.removeItem(key),
    get localStorage() {
      return window.localStorage
    }
  }
}

export function useDarkMode() {
  const darkMode = useDarkModeImpl(false, { 
    classNameDark: 'dark-mode',
    storageProvider: createSafeStorage() as any
  })

  return {
    isDarkMode: darkMode.value,
    toggleDarkMode: darkMode.toggle
  }
}
