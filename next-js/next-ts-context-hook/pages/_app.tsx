import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../providers/themeContext'
import { CounterProvider } from '../providers/counterContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CounterProvider>
        <Component {...pageProps} />
      </CounterProvider>
    </ThemeProvider>
  )
}

export default MyApp
