'use client';
import { useAuthStore } from '@/store/authStore';
import Link from 'next/link';
import SearchInput from './SearchInput';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const pathname = usePathname();

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
            <SearchInput />
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
          <div className='flex items-center justify-start overflow-scroll flex-nowrap gap-x-6 no-scrollbar'>
            <div className='flex flex-col gap-y-3 group'>
              <Link
                href='/'
                className={classNames(
                  'text-sm font-medium transition duration-300 ease-in-out',
                  {
                    'text-[#EB8426]': pathname === '/',
                    'text-slate-300 group-hover:text-[#EB8426]': pathname !== '/',
                  }
                )}
              >
                Home
              </Link>
              <div
                className={classNames(
                  'w-[42px] h-1 rounded-full transition-all duration-300',
                  {
                    'bg-[#EB8426] scale-x-100': pathname === '/',
                    'bg-slate-200 scale-x-0 group-hover:scale-x-100': pathname !== '/',
                  }
                )}
              ></div>
            </div>
            <div className='flex flex-col gap-y-3 group'>
              <Link
                href='/products'
                className={classNames(
                  'text-sm font-medium transition duration-300 ease-in-out',
                  {
                    'text-[#EB8426]': pathname === '/products',
                    'text-slate-300 group-hover:text-[#EB8426]': pathname !== '/products',
                  }
                )}
              >
                Product
              </Link>
              <div
                className={classNames(
                  'w-[42px] h-1 rounded-full transition-all duration-300',
                  {
                    'bg-[#EB8426] scale-x-100': pathname === '/products',
                    'bg-slate-200 scale-x-0 group-hover:scale-x-100': pathname !== '/products',
                  }
                )}
              ></div>
            </div>
            <div className='flex flex-col gap-y-3 group'>
              <Link
                href='/categories'
                className={classNames(
                  'text-sm font-medium transition duration-300 ease-in-out',
                  {
                    'text-[#EB8426]': pathname === '/categories',
                    'text-slate-300 group-hover:text-[#EB8426]': pathname !== '/categories',
                  }
                )}
              >
                Categories
              </Link>
              <div
                className={classNames(
                  'w-[42px] h-1 rounded-full transition-all duration-300',
                  {
                    'bg-[#EB8426] scale-x-100': pathname === '/categories',
                    'bg-slate-200 scale-x-0 group-hover:scale-x-100': pathname !== '/categories',
                  }
                )}
              ></div>
            </div>
            {user && user.user.Role.Name === 'Admin' && (
              <div className='flex flex-col gap-y-3 group'>
                <Link
                  href='/dashboard/transactions'
                  className='text-sm font-medium text-[#3E3E3E] transition duration-300 ease-in-out group-hover:text-[#EB8426]'
                >
                  Dashboard
                </Link>
                <div className='w-[42px] h-1 bg-slate-200 rounded-full transition-all duration-300 group-hover:bg-[#EB8426]'></div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
