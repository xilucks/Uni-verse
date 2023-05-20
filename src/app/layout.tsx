import './globals.css'
import { Inter } from 'next/font/google'
import TestComponent from "@/app/components/tc";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Uni-Verse',
  authors: "siun0331@naver.com",
  description: '프론트엔드 개발자 Uni가 아무렇게나 떠드는 공간',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
      <div>test</div>
      <TestComponent />
      {children}</body>
    </html>
  )
}
