// utils/phoneUtils.ts

export const validatePhone = (phoneNumber: string): boolean => {
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  return /^7\d{10}$/.test(digitsOnly);
};

export const formatPhone = (phoneNumber: string): string => {
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  if (!digitsOnly) return '';

  let formatted = '+';
  const parts = [];

  parts.push(digitsOnly.slice(0, 1));
  if (digitsOnly.length > 1) parts.push(digitsOnly.slice(1, 4));
  if (digitsOnly.length > 4) parts.push(digitsOnly.slice(4, 7));
  if (digitsOnly.length > 7) parts.push(digitsOnly.slice(7, 9));
  if (digitsOnly.length > 9) parts.push(digitsOnly.slice(9, 11));

  formatted += parts.join(' ');

  return formatted.trim();
};
