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
          <div className='flex items-center justify-between overflow-scroll flex-nowrap gap-x-12 no-scrollbar'>
            <div className='flex flex-col gap-y-3'>
              <Link
                href='/'
                className={classNames('text-sm', {
                  'text-[#EB8426]': pathname === '/',
                  'text-slate-300': pathname !== '/',
                })}
              >
                Home
              </Link>
              <div
                className={classNames('w-[42px] h-1 rounded-full', {
                  'bg-[#EB8426]': pathname === '/',
                  'bg-slate-200': pathname !== '/',
                })}
              ></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <Link
                href='/blog'
                className={classNames('text-sm', {
                  'text-[#EB8426]': pathname === '/blog',
                  'text-slate-300': pathname !== '/blog',
                })}
              >
                Blog
              </Link>
              <div
                className={classNames('w-[42px] h-1 rounded-full', {
                  'bg-[#EB8426]': pathname === '/blog',
                  'bg-slate-200': pathname !== '/blog',
                })}
              ></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <Link
                href='/products'
                className={classNames('text-sm', {
                  'text-[#EB8426]': pathname === '/products',
                  'text-slate-300': pathname !== '/products',
                })}
              >
                Products
              </Link>
              <div
                className={classNames('w-[42px] h-1 rounded-full', {
                  'bg-[#EB8426]': pathname === '/products',
                  'bg-slate-200': pathname !== '/products',
                })}
              ></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <Link
                href='/categories'
                className={classNames('text-sm', {
                  'text-[#EB8426]': pathname === '/categories',
                  'text-slate-300': pathname !== '/categories',
                })}
              >
                Categories
              </Link>
              <div
                className={classNames('w-[42px] h-1 rounded-full', {
                  'bg-[#EB8426]': pathname === '/categories',
                  'bg-slate-200': pathname !== '/categories',
                })}
              ></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <Link
                href='/portfolio'
                className={classNames('text-sm', {
                  'text-[#EB8426]': pathname === '/portfolio',
                  'text-slate-300': pathname !== '/portfolio',
                })}
              >
                Portfolio
              </Link>
              <div
                className={classNames('w-[42px] h-1 rounded-full', {
                  'bg-[#EB8426]': pathname === '/portfolio',
                  'bg-slate-200': pathname !== '/portfolio',
                })}
              ></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <Link
                href='/promo'
                className={classNames('text-sm', {
                  'text-[#EB8426]': pathname === '/promo',
                  'text-slate-300': pathname !== '/promo',
                })}
              >
                Promo
              </Link>
              <div
                className={classNames('w-[42px] h-1 rounded-full', {
                  'bg-[#EB8426]': pathname === '/promo',
                  'bg-slate-200': pathname !== '/promo',
                })}
              ></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <Link
                href='/guide'
                className={classNames('text-sm', {
                  'text-[#EB8426]': pathname === '/guide',
                  'text-slate-300': pathname !== '/guide',
                })}
              >
                Panduan Transaksi
              </Link>
              <div
                className={classNames('w-[42px] h-1 rounded-full', {
                  'bg-[#EB8426]': pathname === '/guide',
                  'bg-slate-200': pathname !== '/guide',
                })}
              ></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <Link
                href='/contact-us'
                className={classNames('text-sm', {
                  'text-[#EB8426]': pathname === '/contact-us',
                  'text-slate-300': pathname !== '/contact-us',
                })}
              >
                Contact Us
              </Link>
              <div
                className={classNames('w-[42px] h-1 rounded-full', {
                  'bg-[#EB8426]': pathname === '/contact-us',
                  'bg-slate-200': pathname !== '/contact-us',
                })}
              ></div>
            </div>
            {user && (
              <div className='flex flex-col gap-y-3'>
                <Link href='' className='text-[#3E3E3E] text-sm'>
                  Dashboard
                </Link>
                <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
