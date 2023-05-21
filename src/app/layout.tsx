import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Uni-Verse',
  authors: "siun0331@naver.com",
  description: '프론트엔드 개발자 Uni가 아무렇게나 떠드는 공간',
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
