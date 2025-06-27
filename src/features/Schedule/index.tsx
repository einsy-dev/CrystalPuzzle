import { Card } from '@/shared';
import Link from 'next/link';

interface ScheduleProps {
  className?: string;
}

function getData() {
  return Array.from({ length: 30 }, (_, i) => ({
    id: i,
    title: `Спортзал lorem ipsum долор ${i}`,
    start: new Date(),
    end: new Date(new Date().setHours(new Date().getHours() + 1)),
  }));
}

export function Schedule({ className }: Readonly<ScheduleProps>) {
  const data = getData();
  return (
    <Card className={className}>
      <div className="w-full h-full relative">
        <div className="absolute inset-0 overflow-scroll px-2">
          <div className=" text-center after_underline sticky top-0 bg-light">
            Расписание
          </div>
          <ul className="pt-2">
            {data?.map((item) => (
              <li
                key={item.id}
                className="after:block after:w-full after:border after:border-dark last:after:hidden"
              >
                <Link href={`/schedule/${item.id}`} className="link block">
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
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
