import { Card } from '@/shared';
import Link from 'next/link';

interface ScheduleProps {
  className?: string;
}

function getData() {
  return Array.from({ length: 30 }, (_, i) => ({
    id: i,
    title: `Спортзал ${i}`,
    start: new Date(),
    end: new Date(),
  }));
}

export function Schedule({ className }: Readonly<ScheduleProps>) {
  const data = getData();
  return (
    <Card className={'overflow-scroll relative' + ' ' + className}>
      <div className="absolute inset-0 p-4">
        <div className=" text-center after_underline">Расписания</div>
        <ul className="pt-2">
          {data?.map((item) => (
            <li key={item.id}>
              <Link href={`/schedule/${item.id}`}>
                <div className="">
                  {item.start.toLocaleTimeString('ru', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}{' '}
                  -{' '}
                  {item.end.toLocaleTimeString('ru', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}{' '}
                  {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
