import { useNavigate } from 'react-router-dom';
import { createOtpCode } from '@api/requests/auth';
import { useMutation } from '@tanstack/react-query';

/**
 * Хук для создания проверочного кода
 * @returns Объект запроса на создание
 */

export const useCreateOtpCode = () => {
  const navigate = useNavigate();
  const createOtpCodeMutation = useMutation({
    mutationFn: (values: Parameters<typeof createOtpCode>[0]) => createOtpCode(values),
    onSuccess: () => {
      navigate('/');
    }
  });

  return createOtpCodeMutation;
};
