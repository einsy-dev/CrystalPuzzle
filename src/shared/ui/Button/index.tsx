'use client';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  className,
  id,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={'button-dark' + ' ' + className}
      id={id}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
