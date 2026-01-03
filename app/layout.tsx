import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Peram Geethanjanreddy | Junior Frontend Developer',
  description: 'Portfolio website of Peram Geethanjanreddy - Junior Frontend Developer specializing in React, Next.js, TypeScript, and Tailwind CSS',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Web Developer'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
