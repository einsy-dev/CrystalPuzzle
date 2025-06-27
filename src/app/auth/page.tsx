'use client';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { Policy } from '@/features';
import { useSearchParams } from '@/shared/hooks/useSearchParams';
import {
  useSearchParams as useNextSearchParams,
  useRouter,
} from 'next/navigation';
import { FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { Password } from '@/features/Password';

export default function Auth() {
  const params = useNextSearchParams().get('register') === 'true';
  const [{ register = params }, setSearchParams] = useSearchParams();
  const router = useRouter();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    await signIn('credentials', {
      email: data.get('email'),
      password: data.get('password'),
      redirect: false,
    }).finally(() => {
      router.push('/');
    });
  }

  return (
    <main className="w-full self-center grid place-items-center">
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <h1 className="text-center text-2xl after_underline">
          {register ? 'Регистрация' : 'Вход'}
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          {register && (
            <Input
              id="name"
              name="name"
              label="Ваше имя"
              type="text"
              required
              placeholder="Ivan"
            />
          )}
          <Input
            id="email"
            name="email"
            type="email"
            label="Ваш e-mail"
            required
            placeholder="ivanov@example.com"
          />

          <Password />

          <Policy />

          <Button dark type="submit" className="py-2">
            {register ? 'Зарегистрироваться' : 'Войти'}
          </Button>

          <span
            className="text-center cursor-pointer"
            onClick={() => setSearchParams({ register: !register })}
          >
            {register
              ? 'Уже есть аккаунт? Войти'
              : 'Нет аккаунта? Зарегистрироваться'}
          </span>
        </form>
      </div>
    </main>
  );
}
