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
      <Sidebar
        routes={[
          { name: 'Профиль', path: '/profile' },
          { name: 'Главная', path: '/' },
          { name: 'Расписание', path: '/schedule' },
          { name: 'Уведомления', path: '/notifications' },
          { name: 'Сообщения', path: '/messages' },
          { name: 'Задания', path: '/tasks' },
          { name: 'Награды', path: '/rewards' },
        ]}
      />
      <main className="flex flex-grow">{children}</main>
    </>
  );
}
