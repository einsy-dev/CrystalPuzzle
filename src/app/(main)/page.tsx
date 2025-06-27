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
  return (
    <div className="w-full h-fit grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-2 ">
      <Schedule className="col-span-1 row-span-2 " />
      <Card className="aspect-square col-span-1 row-span-1 ">Couples</Card>
      <Card className="aspect-square col-span-1 row-span-1 ">Couples</Card>
      <Card className="col-span-2 row-span-1">Couples</Card>
    </div>
  );
}
