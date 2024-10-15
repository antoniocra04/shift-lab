import { useState } from 'react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTimer } from '@/hooks/useTimer';
import { formatPhone, validatePhone } from '@/utils/phoneUtils';

export const LoginPage = () => {
  const [phone, setPhone] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [showCodeInput, setShowCodeInput] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [timer, setTimer] = useTimer(0);

  const handleContinue = () => {
    if (validatePhone(phone)) {
      setError('');
      setShowCodeInput(true);
      setTimer(3);
    } else {
      setError('Пожалуйста, введите корректный номер телефона');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(code)) {
      setError('Пожалуйста, введите корректный проверочный код из 6 цифр');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
    if (error) setError('');
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    if (error) setError('');
  };

  return (
    <div className='w-full max-w-md p-6 mt-24 ml-72'>
      <h1 className='text-2xl font-bold mb-4'>Вход</h1>
      <p className='text-base text-gray-800 mb-4 w-8/12'>
        {showCodeInput
          ? 'Введите проверочный код для входа в личный кабинет'
          : 'Введите номер телефона для входа в личный кабинет'}
      </p>
      {error && (
        <Alert variant='destructive' className='mb-4'>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <form onSubmit={handleSubmit} className='space-y-5'>
        <Input
          type='tel'
          value={phone}
          onChange={handlePhoneChange}
          className='w-full'
          placeholder='Номер телефона'
          disabled={showCodeInput}
        />
        {!showCodeInput ? (
          <Button
            type='button'
            onClick={handleContinue}
            className='w-full bg-blue-500 hover:bg-blue-600 text-white'
          >
            Продолжить
          </Button>
        ) : (
          <>
            <Input
              type='text'
              value={code}
              onChange={handleCodeChange}
              placeholder='Проверочный код'
              className='w-full'
            />
            <Button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white'>
              Войти
            </Button>
          </>
        )}
      </form>
      {showCodeInput &&
        (timer > 0 ? (
          <p className='text-sm text-gray-500 mt-7'>
            Запросить код повторно можно через {timer} секунд
          </p>
        ) : (
          <div className='text-center'>
            <Button variant='link' onClick={handleContinue} className='text-sm text-gray-600 mt-4'>
              Запросить код повторно
            </Button>
          </div>
        ))}
    </div>
  );
};
