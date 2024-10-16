import { useNavigate } from 'react-router-dom';
import { signIn } from '@api/requests/auth';
import { useTypedDispatch } from '@store/baseHooks';
import { setUser } from '@store/user/slice';
import { useMutation } from '@tanstack/react-query';

/**
 * Хук для авторизации пользователя
 * @returns Объект запроса для авторизации
 */

export const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const signInMutation = useMutation({
    mutationFn: (values: { phone: string; code: number }) => signIn(values.phone, values.code),
    onSuccess: (data) => {
      dispatch(setUser({ token: data.token, ...data.user }));
      navigate('/');
    }
  });

  return signInMutation;
};
