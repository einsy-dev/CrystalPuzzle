'use client';
import { ReactNode } from 'react';

interface InputProps {
  id?: string;
  type: string;
  label: string;
  name?: string;
  required: boolean;
  pattern?: string;
  placeholder?: string;
  min?: string;
  max?: string;
  children?: ReactNode;
  className?: string;
}

export function Input({
  id,
  type,
  label,
  name,
  required,
  pattern,
  placeholder,
  min,
  max,
  children,
  className,
}: InputProps) {
  return (
    <div className={'flex flex-col gap-1' + ' ' + className}>
      {label && (
        <label htmlFor={id} className="">
          {label}
        </label>
      )}
      <div className="flex items-center gap-2 px-2 py-1 border-dark">
        <input
          id={id}
          name={name}
          className="w-full px-2 py-1 outline-none "
          type={type}
          required={required}
          pattern={pattern}
          placeholder={placeholder}
          min={min}
          max={max}
        />
        <div className="top-0 right-0">{children}</div>
      </div>
    </div>
  );
}
