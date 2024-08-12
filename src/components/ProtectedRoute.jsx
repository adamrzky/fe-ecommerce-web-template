'use client';

import { useAuthStore } from '@/store/authStore';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user === undefined) return;

    const dashboardRouteList = ['/dashboard', '/dashboard/products', '/dashboard/categories', '/dashboard/transaction'];
    const loginRoutesList = ['/auth/login', '/auth/register'];
    const protectedRoutesList = [
      '/account',
      '/account/password',
      '/dashboard',
      '/my-reviews',
      '/account/transactions',
      '/account/my-reviews',
    ];

    if (user) {
      if (user?.user.Role.Name !== 'Admin' && dashboardRouteList.includes(pathname)) {
        router.push('/');
        return;
      }

      if (loginRoutesList.includes(pathname)) {
        router.push('/');
        return;
      }
    } else {
      if (protectedRoutesList.includes(pathname)) {
        router.push('/auth/login');
      }
    }
  }, [user, pathname, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
