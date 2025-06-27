import type { Metadata } from 'next';
import { Sidebar } from '@/widgets/Sidebar';

export const metadata: Metadata = {
  title: 'Crystal Puzzles',
  description:
    'Приложение для составления расписания для тренеров, создание плана занятий для учеников и для отслеживания статистики',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <main className="flex flex-grow">{children}</main>
    </>
  );
}
