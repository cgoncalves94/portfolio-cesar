import type { Metadata } from 'next'
import { Inter, Sora, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cesar Goncalves - Software Engineer',
  description:
    'Portfolio of Cesar Goncalves, a Software Engineer specializing in backend development with Python, FastAPI, and AI/ML solutions.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Cesar Goncalves – Backend & AI Engineer',
    description:
      'Portfolio of Cesar Goncalves, a Software Engineer specializing in backend development with Python, FastAPI, and AI/ML solutions.',
    images: ['/31444937_cropped.jpg'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} font-body bg-bg-primary text-text-primary antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
