const Navbar = () => {
  return (
    <header>
      <nav className='max-w-[1920px] py-6 mx-auto bg-[#FFF9F3] px-6 xl:px-0'>
        <div className='mx-auto max-w-[1320px]'>
          <div className='flex items-center justify-between'>
            <a
              href='#'
              className='text-[#EB6D20] font-semibold text-base tracking-wide'
            >
              E-Commerce
            </a>
            <div className='items-center flex-1 hidden py-4 ml-24 mr-8 bg-white rounded-full md:flex px-7'>
              <input
                id='search'
                name='search'
                type='text'
                className='w-full text-sm outline-none text-slate-600'
                placeholder='Search anything . . .'
              />
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
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
              <button className='text-xs hidden md:block text-white bg-[#EB6D20] py-4 px-7 rounded-full tracking-wider font-medium'>
                Help
              </button>
              <div className='flex items-center gap-x-2'>
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

                <p className='text-base text-[#3E3E3E] hidden md:block'>
                  Account
                </p>
              </div>
              <div className='flex items-center gap-x-2'>
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
                    d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                  />
                </svg>
                <p className='text-base text-[#3E3E3E] hidden md:block'>
                  Shopping
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 mx-auto max-w-[1320px]'>
          <div className='flex flex-wrap items-center justify-between md:flex-nowrap gap-x-12'>
            <div className='flex flex-col gap-y-3'>
              <a href='' className='text-[#3E3E3E] text-sm'>
                Jewelry & Accessories
              </a>
              <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <a href='' className='text-[#3E3E3E] text-sm'>
                Clothing & Shoes
              </a>
              <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <a href='' className='text-[#3E3E3E] text-sm'>
                Home & Living
              </a>
              <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <a href='' className='text-[#EB8426] text-sm'>
                Wedding & Party
              </a>
              <div className='w-[42px] h-1 bg-[#EB8426] rounded-full'></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <a href='' className='text-[#3E3E3E] text-sm'>
                Toys & Entertainment
              </a>
              <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <a href='' className='text-[#3E3E3E] text-sm'>
                Art & Collectibles
              </a>
              <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <a href='' className='text-[#3E3E3E] text-sm'>
                Craft Supplies & Tools
              </a>
              <div className='w-[42px] h-1 bg-slate-200 rounded-full'></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
