import { authKay } from '@/contants/authkey';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { deleteCookies } from './deleteCookies';

export const logoutUser = (router: AppRouterInstance) => {
   localStorage.removeItem(authKay);
   deleteCookies([authKay, 'refreshToken']);
   router.push('/');
   router.refresh();
};