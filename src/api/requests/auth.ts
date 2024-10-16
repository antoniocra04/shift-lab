import { axiosClient } from '../client';

interface CreateOtpCodeDto {
  success: boolean;
  reason: string;
  retryDelay: number;
}

interface User {
  phone: string;
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  city: string;
}

interface SignInDto {
  success: true;
  reason: string;
  user: User;
  token: string;
}

export const createOtpCode = async (phone: string): Promise<CreateOtpCodeDto> => {
  return axiosClient.post(`/auth/otp`, { phone });
};

export const signIn = async (phone: string, code: number): Promise<SignInDto> => {
  return axiosClient.post(`/users/signin`, { phone, code });
};
