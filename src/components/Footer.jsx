const Footer = () => {
  return (
    <>
      <footer>
        <div className='mx-auto max-w-[1320px] my-8 px-6 xl:px-0'>
          <div className='grid grid-cols-2 gap-6 md:grid-cols-6 md:gap-12'>
            {/* Company Info */}
            <div className='col-span-2 p-4 '>
              <div className='flex flex-col gap-y-6'>
                <a
                  href='#'
                  className='text-[#EB6D20] font-semibold text-base tracking-wide'
                >
                  E-Commerce
                </a>
                <p className='text-sm font-medium tracking-wider'>
                  Jawa Barat, Indonesia
                </p>
                <div className='flex items-center mt-6 gap-x-4'>
                  <a
                    href='#'
                    className='flex items-center justify-center w-8 h-8 bg-[#1877F2] rounded-full'
                  >
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 12 2.9 15.3 6.7 15.9V10.3H4.7V8H6.7V6.2C6.7 4.2 7.9 3.1 9.7 3.1C10.6 3.1 11.5 3.3 11.5 3.3V5.3H10.5C9.5 5.3 9.2 5.9 9.2 6.5V8H11.4L11 10.3H9.1V16C13.1 15.4 16 12 16 8Z'
                        fill='white'
                      />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='flex items-center justify-center w-8 h-8 bg-[#1DA1F2] rounded-full'
                  >
                    <svg
                      width='16'
                      height='14'
                      viewBox='0 0 16 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M16 2C15.4 2.3 14.8 2.4 14.1 2.5C14.8 2.1 15.3 1.5 15.5 0.7C14.9 1.1 14.2 1.3 13.4 1.5C12.8 0.9 11.9 0.5 11 0.5C8.9 0.5 7.3 2.5 7.8 4.5C5.1 4.4 2.7 3.1 1 1.1C0.1 2.6 0.6 4.5 2 5.5C1.5 5.5 1 5.3 0.5 5.1C0.5 6.6 1.6 8 3.1 8.4C2.6 8.5 2.1 8.6 1.6 8.5C2 9.8 3.2 10.8 4.7 10.8C3.5 11.7 1.7 12.2 0 12C1.5 12.9 3.2 13.5 5 13.5C11.1 13.5 14.5 8.4 14.3 3.7C15 3.3 15.6 2.7 16 2Z'
                        fill='white'
                      />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='flex items-center justify-center w-8 h-8 bg-[#2867B2] rounded-full'
                  >
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M3.60001 16H0.199997V5.3H3.60001V16ZM1.9 3.8C0.800002 3.8 0 3 0 1.9C0 0.8 0.900002 0 1.9 0C3 0 3.8 0.8 3.8 1.9C3.8 3 3 3.8 1.9 3.8ZM16 16H12.6V10.2C12.6 8.5 11.9 8 10.9 8C9.89999 8 8.89999 8.8 8.89999 10.3V16H5.5V5.3H8.7V6.8C9 6.1 10.2 5 11.9 5C13.8 5 15.8 6.1 15.8 9.4V16H16Z'
                        fill='white'
                      />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='flex items-center justify-center w-8 h-8 bg-[#EA4C89] rounded-full'
                  >
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.4 16 16 12.416 16 8C16 3.584 12.4 0 8 0ZM13.28 3.68C14.24 4.848 14.8 6.32 14.832 7.936C14.608 7.888 12.352 7.44 10.08 7.712C10.032 7.6 9.984 7.472 9.936 7.36C9.792 7.024 9.648 6.688 9.488 6.368C11.984 5.36 13.136 3.872 13.28 3.68ZM8 1.184C9.728 1.184 11.328 1.84 12.528 2.896C12.4 3.072 11.376 4.448 8.944 5.36C7.824 3.296 6.576 1.616 6.4 1.36C6.912 1.248 7.44 1.184 8 1.184ZM5.088 1.824C5.264 2.064 6.48 3.76 7.616 5.776C4.416 6.624 1.6 6.608 1.296 6.608C1.76 4.48 3.184 2.72 5.088 1.824ZM1.168 8.016C1.168 7.952 1.168 7.872 1.168 7.808C1.456 7.824 4.784 7.856 8.192 6.832C8.384 7.216 8.576 7.6 8.752 8C8.672 8.032 8.576 8.048 8.48 8.08C4.96 9.216 3.088 12.32 2.928 12.576C1.824 11.36 1.168 9.76 1.168 8.016ZM8 14.832C6.416 14.832 4.96 14.288 3.808 13.392C3.936 13.136 5.312 10.464 9.168 9.12C9.184 9.104 9.2 9.104 9.216 9.104C10.176 11.6 10.576 13.68 10.672 14.288C9.856 14.64 8.944 14.832 8 14.832ZM11.808 13.664C11.744 13.248 11.376 11.248 10.48 8.8C12.624 8.464 14.496 9.024 14.736 9.088C14.432 10.992 13.344 12.64 11.808 13.664Z'
                        fill='white'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className='p-4'>
              <div className='flex flex-col gap-y-6 text-[#3E3E3E]'>
                <p className='text-[16px] font-medium'>Shop</p>
                <div className='flex flex-col text-sm font-normal gap-y-3'>
                  <a href='#'>Gift Card</a>
                  <a href='#'>Site Map</a>
                  <a href='#'>Polka Blog</a>
                  <a href='#'>Login</a>
                  <a href='#'>Sign Up</a>
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className='flex flex-col gap-y-6 text-[#3E3E3E]'>
                <p className='text-[16px] font-medium'>Sell</p>
                <div className='flex flex-col text-sm font-normal gap-y-3'>
                  <a href='#'>Sell On Polka</a>
                  <a href='#'>Teams</a>
                  <a href='#'>Forums</a>
                  <a href='#'>Affilates</a>
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className='flex flex-col gap-y-6 text-[#3E3E3E]'>
                <p className='text-[16px] font-medium'>About</p>
                <div className='flex flex-col text-sm font-normal gap-y-3'>
                  <a href='#'>Polka, Inc.</a>
                  <a href='#'>Policies</a>
                  <a href='#'>Investors</a>
                  <a href='#'>Careers</a>
                  <a href='#'>Press</a>
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className='flex flex-col gap-y-6 text-[#3E3E3E]'>
                <p className='text-[16px] font-medium'>Help</p>
                <div className='flex flex-col text-sm font-normal gap-y-3'>
                  <a href='#'>Help Center</a>
                  <a href='#'>Trust and Safety</a>
                  <a href='#'>Privacy Settings</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
