import { Checkbox } from '@/shared';

export const Policy = () => {
  return (
    <div className="flex gap-2">
      <Checkbox required />
      <label className="text-sm" htmlFor="checkbox">
        Подтверждая, вы соглашаетесь с принятой на сайте{' '}
        <a
          href="https://drive.google.com/file/d/1oU3TamtASCI3z2CN6RNhO2sCJye0mk8N/view?usp=drive_link"
          target="_blank"
          className="text-dark underline"
          rel="noopener noreferrer"
        >
          политикой обработки персональных данных и конфиденциальности
        </a>
      </label>
    </div>
  );
};
