import { StyleSheet } from 'react-native-unistyles'

const darkTheme = {
  colors: {
    background: '#000000',
    surface: '#1C1C1E',
    surfaceSecondary: '#2C2C2E',
    text: '#FFFFFF',
    textSecondary: '#8E8E93',
    textTertiary: '#636366',
    primary: '#0A84FF',
    primaryDark: '#0066CC',
    accent: '#FFD60A',
    error: '#FF453A',
    success: '#32D74B',
    border: '#38383A',
  },
  spacing: (n: number) => n * 8,
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },
} as const

type AppThemes = {
  dark: typeof darkTheme
}

type AppBreakpoints = typeof breakpoints

const breakpoints = {
  mobile: 0,
  tablet: 768,
} as const

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  themes: {
    dark: darkTheme,
  },
  breakpoints,
  settings: {
    initialTheme: 'dark',
  },
})
