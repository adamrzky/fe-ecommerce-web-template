'use client';
import { useAuthStore } from '@/store/authStore';
import Link from 'next/link';

const Navbar = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <nav className='max-w-[1920px] py-6 mx-auto bg-[#FFF9F3] px-6 xl:px-0'>
        <div className='mx-auto max-w-[1320px]'>
          <div className='flex items-center justify-between'>
            <Link
              href='/'
              className='text-[#EB6D20] font-semibold text-base tracking-wide'
            >
              E-Commerce
            </Link>
            <div className='items-center flex-1 relative hidden py-4 ml-24 mr-8 bg-[#FFF9F3] rounded-full md:flex'>
              <input
                id='search'
                name='search'
                type='text'
                className='w-full text-sm outline-none text-slate-600 rounded-full py-3 px-6 focus:outline-none focus:ring-0 focus:border-[#EB6D20]'
                placeholder='Search anything...'
              />
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute right-3'
              >
                <circle
                  cx='11'
                  cy='11'
                  r='6'
                  fill='#FFF9F3'
                  stroke='#3E3E3E'
                  strokeWidth='2'
                />
                <path
                  d='M20 20L17 17'
                  stroke='#3E3E3E'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </div>
            <div className='flex items-center gap-x-6'>
              <div className='flex items-center gap-x-2'>
                {user ? (
                  <>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='#3E3E3E'
                      className='size-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                      />
                    </svg>
                    <Link
                      href='/account'
                      className='xl:text-base text-sm mr-3 text-[#3E3E3E] md:block'
                    >
                      Account
                    </Link>
                    <button
                      onClick={handleLogout}
                      className='text-sm md:block text-white bg-[#EB8426] hover:bg-[#EB6D20] xl:py-3 xl:px-7 py-3 px-5 rounded-full tracking-wider font-sm xl:font-medium'
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href='/auth/login'
                      className='mr-3 text-sm font-medium xl:text-base text-slate-700 md:block'
                    >
                      Login
                    </Link>
                    <Link
                      href='/auth/register'
                      className='text-xs xl:text-sm md:block text-white bg-[#EB8426] hover:bg-[#EB6D20] xl:py-3 xl:px-7 py-3 px-5 rounded-full tracking-wider font-medium'
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 mx-auto max-w-[1320px]'>
          <div className='flex items-center justify-between overflow-scroll flex-nowrap gap-x-12 no-scrollbar'>
            <div className='flex flex-col gap-y-3'>
              <Link href='' className='text-[#3E3E3E] text-sm'>
                Blog
              </Link>
              <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <Link href='' className='text-[#3E3E3E] text-sm'>
                eCommerce
              </Link>
              <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <Link href='' className='text-[#3E3E3E] text-sm'>
                Portfolio
              </Link>
              <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <Link href='' className='text-[#EB8426] text-sm'>
                Landing Page
              </Link>
              <div className='w-[42px] h-1 bg-[#EB8426] rounded-full'></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <Link href='' className='text-[#3E3E3E] text-sm'>
                Corporate/Business
              </Link>
              <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <Link href='' className='text-[#3E3E3E] text-sm'>
                Admin Dashboard
              </Link>
              <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <Link href='' className='text-[#3E3E3E] text-sm'>
                Education
              </Link>
              <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
            </div>

            <div className='flex flex-col gap-y-3'>
              <Link href='' className='text-[#3E3E3E] text-sm'>
                Restaurant/Food
              </Link>
              <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
