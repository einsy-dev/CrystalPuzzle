import type { Metadata } from 'next';
import './globals.css';
import Header from '@/widgets/Header';
import { SessionProvider } from 'next-auth/react';
import { Footer } from '@/widgets/Footer';
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Crystal Puzzles',
  description:
    'Приложение для составления расписания для тренеров, создание плана занятий для учеников и для отслеживания статистики',
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <SessionProvider>
        <body
          className={
            'min-h-screen flex flex-col bg-gradient-light sm:text-lg md:text-xl' +
            ' ' +
            roboto.className
          }
        >
          <Header />
          <div className="container py-6 flex flex-grow gap-4 relative">
            {children}
          </div>
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
