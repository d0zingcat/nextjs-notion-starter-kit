import useDarkModeImpl from '@fisch0920/use-dark-mode'

export function useDarkMode() {
  const darkMode = useDarkModeImpl(false, { 
    classNameDark: 'dark-mode',
    storageProvider: typeof window !== 'undefined' ? window.localStorage : undefined
  })

  return {
    isDarkMode: darkMode.value,
    toggleDarkMode: darkMode.toggle
  }
}
