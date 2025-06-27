'use client';
import { Schedule } from '@/features';
import { Card } from '@/shared';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function MainPage() {
  const { data } = useSession();
  useEffect(() => {
    console.log(data);
  }, []);
  if (data?.user.role === 'student') {
    return (
      <div className="w-full h-fit grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-2 ">
        <Card className="aspect-square col-span-1 row-span-1 order-1">
          <div className="text-center">Сообщения</div>
        </Card>
        <Card className="aspect-square col-span-1 row-span-1 order-3 lg:order-2">
          <div className="text-center">Награды</div>
        </Card>
        <Schedule className="col-span-1 row-span-2 order-2 lg:order-3" />
        <Card className="col-span-2 row-span-1 order-4">
          <div className="text-center">Мои тренировки (history)</div>
        </Card>
      </div>
    );
  } else if (data?.user.role === 'trainer') {
    return (
      <div className="w-full h-fit grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 gap-2 ">
        <Card className="aspect-square col-span-1 row-span-1 order-2 lg:order-1">
          <div className="text-center">Сообщения</div>
        </Card>
        <Card className="aspect-square col-span-1 row-span-1 order-3 lg:order-2">
          <div className="text-center">Календарь</div>
        </Card>
        <Schedule className="col-span-2 row-span-2 lg:col-span-1 order-1 lg:order-3" />
        <Card className="aspect-square col-span-1 row-span-1 order-4 lg:order-4">
          <div className="text-center">Ученики</div>
        </Card>
        <Card className="aspect-square col-span-1 row-span-1 order-5 lg:order-5">
          <div className="text-center">Группы</div>
        </Card>
      </div>
    );
  }
}
