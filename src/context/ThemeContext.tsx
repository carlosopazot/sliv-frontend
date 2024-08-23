'use client'

import { ConfigProvider, theme } from 'antd'
import React, { createContext, useEffect, useState, useContext } from 'react'

type ThemeContextType = {
  toggleDarkMode: () => void
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { defaultAlgorithm, darkAlgorithm } = theme
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isDarkMode') === 'true' || false
    }
    return false
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const systemAlgorithm = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      setIsDarkMode((prev) => prev || systemAlgorithm)
    }
  }, [])

  const algorithm = isDarkMode ? darkAlgorithm : defaultAlgorithm

  const toggleDarkMode = () => {
    setIsDarkMode((previousValue) => {
      const newValue = !previousValue
      if (typeof window !== 'undefined') {
        localStorage.setItem('isDarkMode', newValue.toString())
      }
      return newValue
    })
  }

  return (
    <ThemeContext.Provider
      value={{ toggleDarkMode, isDarkMode, setIsDarkMode }}
    >
      <ConfigProvider
        theme={{
          algorithm: algorithm
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
