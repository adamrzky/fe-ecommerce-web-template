'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import baseUrl from '@/utils/constains';
import { useAuthStore } from '@/store/authStore';

const EditUserPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [roleID, setRoleID] = useState('');
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { id } = useParams(); 
  const { user } = useAuthStore();
  const token = user?.token;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${baseUrl}/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = response.data.data;
        setUsername(userData.Username);
        setEmail(userData.Email);
        setRoleID(userData.RoleID.toString());
      } catch (err) {
        setError('Failed to fetch user data. Please try again.');
      }
    };

    const fetchRoles = async () => {
      try {
        const response = await axios.get(`${baseUrl}/roles`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRoles(response.data.data);
      } catch (err) {
        setError('Failed to fetch roles. Please try again.');
      }
    };

    fetchUser();
    fetchRoles();
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.put(`${baseUrl}/users/${id}`, {
        username,
        email,
        role_id: parseInt(roleID, 10),
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push('/dashboard/user'); 
    } catch (err) {
      setError('Failed to update user. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-10 mx-auto my-10 max-w-7xl'>
      <h1 className='mb-4 text-2xl font-semibold'>Edit User</h1>
      <form onSubmit={handleSubmit} className='p-6 bg-white border rounded-lg'>
        {error && <p className='mb-4 text-red-600'>{error}</p>}
        <div className='mb-4'>
          <label htmlFor='username' className='block mb-2 text-sm font-medium'>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-full px-3 py-2 border rounded-md'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block mb-2 text-sm font-medium'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-3 py-2 border rounded-md'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='roleID' className='block mb-2 text-sm font-medium'>Role</label>
          <select
            id='roleID'
            value={roleID}
            onChange={(e) => setRoleID(e.target.value)}
            className='w-full px-3 py-2 border rounded-md'
            required
          >
            <option value=''>Select a role</option>
            {roles.map((role) => (
              <option key={role.ID} value={role.ID}>
                {role.Name}
              </option>
            ))}
          </select>
        </div>
        <button
          type='submit'
          className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update User'}
        </button>
      </form>
    </div>
  );
};

export default EditUserPage;
