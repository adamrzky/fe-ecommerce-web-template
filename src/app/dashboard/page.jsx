export default function DashboardPage() {
  return (
    <>
      {/* Page Header */}
      <div className='container px-4 pt-6 mx-auto lg:px-8 lg:pt-8 xl:max-w-7xl'>
        <div className='flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start'>
          <div className='grow'>
            <h1 className='mb-1 text-lg font-semibold'>Dashboard</h1>
          </div>
          <div className='flex items-center justify-center flex-none gap-2 rounded sm:justify-end'>
            <div className='relative'>
              <div className='absolute inset-y-0 flex items-center justify-center w-10 my-px rounded-l-lg pointer-events-none start-0 ms-px text-neutral-500'>
                <svg
                  className='inline-block w-4 h-4 hi-mini hi-magnifying-glass'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                    clip-rule='evenodd'
                  />
                </svg>
              </div>
              <input
                type='text'
                id='search'
                name='search'
                placeholder='Search everything..'
                className='block w-full py-2 text-sm leading-6 border rounded-lg border-neutral-200 pe-3 ps-10 placeholder-neutral-500 focus:border-neutral-500 focus:ring focus:ring-neutral-500/25'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className='container p-4 mx-auto lg:p-8 xl:max-w-7xl'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
          <div className='flex flex-col bg-white border rounded-lg sm:col-span-2 lg:col-span-4'>
            <div className='flex flex-col items-center justify-between gap-4 p-5 text-center border-b border-neutral-100 sm:flex-row sm:text-start'>
              <div>
                <h2 className='mb-0.5 font-semibold'>Recent transaction</h2>
              </div>
              <div>
                <a
                  href='javascript:void(0)'
                  className='inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold leading-5 bg-white border rounded-lg border-neutral-200 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200'
                >
                  View all transaction
                </a>
              </div>
            </div>
            <div className='p-5'>
              <div className='min-w-full overflow-x-auto rounded'>
                <table className='min-w-full text-sm align-middle'>
                  <thead>
                    <tr className='border-b-2 border-neutral-100'>
                      <th className='min-w-[140px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                        ID
                      </th>
                      <th className='min-w-[180px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                        Date
                      </th>
                      <th className='min-w-[180px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                        User
                      </th>
                      <th className='min-w-[180px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                        Title
                      </th>
                      <th className='px-3 py-2 text-sm font-semibold tracking-wider uppercase text-start text-neutral-700'>
                        Status
                      </th>
                      <th className='min-w-[100px] p-3 py-2 text-end text-sm font-semibold uppercase tracking-wider text-neutral-700'></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className='border-b border-neutral-100 hover:bg-neutral-50'>
                      <td className='p-3 font-semibold text-start text-neutral-600'>
                        RN#4583
                      </td>
                      <td className='p-3 text-start text-neutral-600'>
                        2023-11-05 17:45
                      </td>
                      <td className='p-3 font-medium text-neutral-600'>
                        <a
                          href='javascript:void(0)'
                          className='underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300'
                        >
                          Samantha Davis
                        </a>
                      </td>
                      <td className='p-3 text-start'>
                        Issues Syncing Calendar Across Devices
                      </td>
                      <td className='p-3 font-medium'>
                        <div className='inline-block px-2 py-1 text-xs font-semibold leading-4 text-blue-800 bg-blue-100 rounded-full whitespace-nowrap'>
                          Awaiting Response
                        </div>
                      </td>
                      <td className='p-3 font-medium text-end'>
                        <a
                          href='javascript:void(0)'
                          className='inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold leading-5 bg-white border rounded-lg border-neutral-200 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200'
                        >
                          <span>View</span>
                          <svg
                            className='hi-mini hi-arrow-right inline-block h-5 w-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                              clip-rule='evenodd'
                            ></path>
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr className='border-b border-neutral-100 hover:bg-neutral-50'>
                      <td className='p-3 font-semibold text-start text-neutral-600'>
                        RN#4582
                      </td>
                      <td className='p-3 text-start text-neutral-600'>
                        2023-10-30 08:00
                      </td>
                      <td className='p-3 font-medium text-neutral-600'>
                        <a
                          href='javascript:void(0)'
                          className='underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300'
                        >
                          Mindy O'Connell
                        </a>
                      </td>
                      <td className='p-3 text-start'>
                        Graphics Tablet Not Responding in Design Software
                      </td>
                      <td className='p-3 font-medium'>
                        <div className='inline-block px-2 py-1 text-xs font-semibold leading-4 text-purple-800 bg-purple-100 rounded-full whitespace-nowrap'>
                          New
                        </div>
                      </td>
                      <td className='p-3 font-medium text-end'>
                        <a
                          href='javascript:void(0)'
                          className='inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold leading-5 bg-white border rounded-lg border-neutral-200 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200'
                        >
                          <span>View</span>
                          <svg
                            className='hi-mini hi-arrow-right inline-block h-5 w-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                              clip-rule='evenodd'
                            ></path>
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr className='border-b border-neutral-100 hover:bg-neutral-50'>
                      <td className='p-3 font-semibold text-start text-neutral-600'>
                        RN#4580
                      </td>
                      <td className='p-3 text-start text-neutral-600'>
                        2023-11-10 14:15
                      </td>
                      <td className='p-3 font-medium text-neutral-600'>
                        <a
                          href='javascript:void(0)'
                          className='underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300'
                        >
                          Helen Thompson
                        </a>
                      </td>
                      <td className='p-3 text-start'>
                        Payroll System Access Denied Error
                      </td>
                      <td className='p-3 font-medium'>
                        <div className='inline-block px-2 py-1 text-xs font-semibold leading-4 text-orange-800 bg-orange-100 rounded-full whitespace-nowrap'>
                          Under Investigation
                        </div>
                      </td>
                      <td className='p-3 font-medium text-end'>
                        <a
                          href='javascript:void(0)'
                          className='inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold leading-5 bg-white border rounded-lg border-neutral-200 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200'
                        >
                          <span>View</span>
                          <svg
                            className='hi-mini hi-arrow-right inline-block h-5 w-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                              clip-rule='evenodd'
                            ></path>
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr className='border-b border-neutral-100 hover:bg-neutral-50'>
                      <td className='p-3 font-semibold text-start text-neutral-600'>
                        RN#4579
                      </td>
                      <td className='p-3 text-start text-neutral-600'>
                        2023-10-15 09:15
                      </td>
                      <td className='p-3 font-medium text-neutral-600'>
                        <a
                          href='javascript:void(0)'
                          className='underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300'
                        >
                          Peter Williams
                        </a>
                      </td>
                      <td className='p-3 text-start'>
                        CRM Tool Lagging and Freezing
                      </td>
                      <td className='p-3 font-medium'>
                        <div className='inline-block px-2 py-1 text-xs font-semibold leading-4 rounded-full whitespace-nowrap bg-emerald-100 text-emerald-800'>
                          Closed
                        </div>
                      </td>
                      <td className='p-3 font-medium text-end'>
                        <a
                          href='javascript:void(0)'
                          className='inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold leading-5 bg-white border rounded-lg border-neutral-200 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200'
                        >
                          <span>View</span>
                          <svg
                            className='hi-mini hi-arrow-right inline-block h-5 w-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                              clip-rule='evenodd'
                            ></path>
                          </svg>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
