import Link from 'next/link';

export function Card({
  className,
  children,
  href,
}: {
  className?: string;
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={'link block border-dark w-full p-4' + ' ' + className}
        >
          {children}
        </Link>
      ) : (
        <div className={'border-dark w-full p-4' + ' ' + className}>
          {children}
        </div>
      )}
    </>
  );
}
