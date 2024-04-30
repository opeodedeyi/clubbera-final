import { ThemeProvider } from 'next-themes'
import './globals.css';


export const metadata = {
  title: 'Clubbera',
  description: 'Connecting people with local communities',
  icons: {
    icon: '/LogoClubbera.svg',
    apple: '/LogoClubbera.svg',
  }
}


export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
