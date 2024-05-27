'use server';

import { authKay } from '@/contants/authkey';
import { cookies } from 'next/headers';

import { redirect } from 'next/navigation';

const setAccessToken = (token: string, option?: any) => {
   cookies().set(authKay, token);
   if (option && option.passwordChangeRequired) {
      redirect('/dashboard');
   }
   if (option && !option.passwordChangeRequired && option.redirect) {
      redirect(option.redirect);
   }
};

export default setAccessToken;