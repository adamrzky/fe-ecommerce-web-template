'use client';

import { useAuthStore } from '@/store/authStore';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user !== undefined) {
      if (user) {
        const loginRoutesList = ['/auth/login', '/auth/register'];
        if (loginRoutesList.includes(pathname)) {
          router.push('/');
        }
      } else {
        const protectedRoutesList = [
          '/account',
          '/account/password',
          '/dashboard',
          '/my-reviews',
          '/account/transactions',
          '/account/my-reviews',
        ];
        if (protectedRoutesList.includes(pathname)) {
          router.push('/auth/login');
        }
      }
    }
  }, [user, pathname, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
