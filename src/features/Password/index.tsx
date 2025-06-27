import { Input } from '@/shared';
import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';

export function Password() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Input
      label="Пароль"
      id="password"
      name="password"
      type={showPassword ? 'text' : 'password'}
      required
    >
      <div
        onClick={() => {
          setShowPassword((prev) => !prev);
        }}
      >
        {showPassword ? <EyeClosed /> : <Eye />}
      </div>
    </Input>
  );
}
