'use client';
import useMenuStore from '@/store/menuStore';
import Link from 'next/link';

const Menu = () => {
  const { activeMenu } = useMenuStore();

  return (
    <header>
      <h1 className='font-medium text-md'>Profile</h1>
      <nav className='mt-3 xl:ml-2'>
        <ul className='flex xl:flex-col'>
          <li className='flex flex-col mt-3 text-sm gap-y-3'>
            <Link
              href='/account'
              className={`${activeMenu === 'profile' && 'text-[#EB8426]'}`}
            >
              Profile
            </Link>
            <div
              className={`w-[42px] h-1 rounded-full ${
                activeMenu === 'profile' ? 'bg-[#EB8426]' : 'bg-slate-200'
              }`}
            ></div>
          </li>
          <li className='flex flex-col mt-3 text-sm gap-y-3'>
            <Link
              href='/account/transaction'
              className={`${
                activeMenu === 'my-transaction' && 'text-[#EB8426]'
              }`}
            >
              Transaction
            </Link>
            <div
              className={`w-[42px] h-1 rounded-full ${
                activeMenu === 'my-transaction'
                  ? 'bg-[#EB8426]'
                  : 'bg-slate-200'
              }`}
            ></div>
          </li>
          <li className='flex flex-col mt-3 text-sm gap-y-3'>
            <Link
              href='/account/my-reviews'
              className={`${activeMenu === 'my-reviews' && 'text-[#EB8426]'}`}
            >
              My Reviews
            </Link>
            <div
              className={`w-[42px] h-1 rounded-full ${
                activeMenu === 'my-reviews' ? 'bg-[#EB8426]' : 'bg-slate-200'
              }`}
            ></div>
          </li>
          <li className='flex flex-col mt-3 ml-4 text-sm xl:ml-0 gap-y-3'>
            <Link
              href='/account/password'
              className={`${activeMenu === 'password' && 'text-[#EB8426]'}`}
            >
              Change Password
            </Link>
            <div
              className={`w-[42px] h-1 rounded-full ${
                activeMenu === 'password' ? 'bg-[#EB8426]' : 'bg-slate-200'
              }`}
            ></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
