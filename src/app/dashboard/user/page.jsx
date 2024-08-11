'use client';

import { useState, useEffect } from 'react';
import UserTable from '@/components/user/UserTable'; 
import Skeleton from 'react-loading-skeleton';
import { useAuthStore } from '@/store/authStore';
import baseUrl from '@/utils/constains';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthStore();
  const token = user?.token;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await fetch(`${baseUrl}/users`, {
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!result.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await result.json();
        setUsers(data.data); 
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [token]);

  if (loading) {
    return (
      <div className='container px-4 pt-6 mx-auto lg:px-8 lg:pt-8 xl:max-w-7xl'>
        <Skeleton count={5} className='mt-6' />
      </div>
    );
  }

  return (
    <div className='p-10 mx-auto my-10 max-w-7xl'>
      <UserTable users={users} />
    </div>
  );
}
