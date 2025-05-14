import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider' // Assuming you have this for Shadcn theming
import { Analytics } from '@vercel/analytics/next'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cesar Goncalves - Software Engineer',
  description:
    'Portfolio of Cesar Goncalves, a Software Engineer specializing in backend development with Python, FastAPI, and AI/ML solutions.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          property="og:title"
          content="Cesar Goncalves – Backend & AI Engineer"
        />
        <meta
          property="og:description"
          content="Portfolio of Cesar Goncalves, a Software Engineer specializing in backend development with Python, FastAPI, and AI/ML solutions."
        />
        <meta property="og:image" content="/31444937_cropped.jpg" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Portfolio of Cesar Goncalves, a Software Engineer specializing in backend development with Python, FastAPI, and AI/ML solutions."
        />
      </Head>
      <body
        className={`${inter.className} bg-gray-900 text-gray-100 antialiased`}
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
