import { Inter } from 'next/font/google'
import './globals.css'
import 'remixicon/fonts/remixicon.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SummerTeaTree',
  description: 'A personal blog developed by Foxx',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
