'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import baseUrl from '@/utils/constains';
import { useAuthStore } from '@/store/authStore';

const UserTable = ({ users }) => {
  const { user } = useAuthStore();
  const token = user?.token;
  const [data, setData] = useState(users || []); 
  const [loading, setLoading] = useState(false);

  const handleDelete = async (deletedId) => {
    const text = 'Are you sure?';
    if (confirm(text)) {
      try {
        setLoading(true);
        await axios.delete(`${baseUrl}/users/${deletedId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(data.filter(user => user.ID !== deletedId));
      } catch (err) {
        alert('Failed to delete user.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className='p-10 mx-auto my-10 max-w-7xl'>
      <div className='flex justify-end mb-4'>
        <Link href="/dashboard/user/new">
          <span className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium leading-5 text-white bg-blue-600 rounded-md hover:bg-blue-700'>
            Add New User
          </span>
        </Link>
      </div>
      <div className='p-4 bg-white border rounded-lg'>
        <div className='overflow-x-auto'>
          {loading ? (
            <Skeleton count={5} />
          ) : (
            <table className='min-w-full text-sm'>
              <thead>
                <tr className='border-b-2'>
                  <th className='px-3 py-2 text-sm font-semibold text-start'>ID</th>
                  <th className='px-3 py-2 text-sm font-semibold text-start'>Username</th>
                  <th className='px-3 py-2 text-sm font-semibold text-start'>Email</th>
                  <th className='px-3 py-2 text-sm font-semibold text-end'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(data) && data.length > 0 ? (
                  data.map((user) => (
                    <tr key={user.ID} className='border-b'>
                      <td className='p-3 text-neutral-600'>{user.ID}</td>
                      <td className='p-3 text-neutral-600'>{user.Username}</td>
                      <td className='p-3 text-neutral-600'>{user.Email}</td>
                      <td className='p-3 text-end'>
                        <Link href={`/dashboard/user/${user.ID}/edit`}>
                          <span className='px-3 py-1 text-xs text-blue-600 cursor-pointer hover:text-blue-800'>Edit</span>
                        </Link>
                        <button
                          onClick={() => handleDelete(user.ID)}
                          className='px-3 py-1 text-xs text-red-600 hover:text-red-800'
                          disabled={loading}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan='4' className='py-10 text-center'>No users available</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserTable;
