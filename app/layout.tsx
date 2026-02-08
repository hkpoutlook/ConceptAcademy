import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CONCEPT ACADEMY - Practical, Graphical & Research-Based Learning',
  description: 'Foundation for practical, experimental & research-based knowledge for students from Class 1 to 12',
  keywords: 'education, learning, concepts, experiments, research, students, CBSE, ICSE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
