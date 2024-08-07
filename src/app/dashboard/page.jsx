export default function DashboardPage() {
  return (
    <>
      {/* Page Header */}
      <div class='container mx-auto px-4 pt-6 lg:px-8 lg:pt-8 xl:max-w-7xl'>
        <div class='flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start'>
          <div class='grow'>
            <h1 class='mb-1 text-lg font-semibold'>Dashboard</h1>
          </div>
          <div class='flex flex-none items-center justify-center gap-2 rounded sm:justify-end'>
            <div class='relative'>
              <div class='pointer-events-none absolute inset-y-0 start-0 my-px ms-px flex w-10 items-center justify-center rounded-l-lg text-neutral-500'>
                <svg
                  class='hi-mini hi-magnifying-glass inline-block h-4 w-4'
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
                class='block w-full rounded-lg border border-neutral-200 py-2 pe-3 ps-10 leading-6 placeholder-neutral-500 focus:border-neutral-500 text-sm focus:ring focus:ring-neutral-500/25'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div class='container mx-auto p-4 lg:p-8 xl:max-w-7xl'>
        <div class='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
          <div class='flex flex-col rounded-lg border bg-white sm:col-span-2 lg:col-span-4'>
            <div class='flex flex-col items-center justify-between gap-4 border-b border-neutral-100 p-5 text-center sm:flex-row sm:text-start'>
              <div>
                <h2 class='mb-0.5 font-semibold'>Recent transaction</h2>
              </div>
              <div>
                <a
                  href='javascript:void(0)'
                  class='inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200'
                >
                  View all transaction
                </a>
              </div>
            </div>
            <div class='p-5'>
              <div class='min-w-full overflow-x-auto rounded'>
                <table class='min-w-full align-middle text-sm'>
                  <thead>
                    <tr class='border-b-2 border-neutral-100'>
                      <th class='min-w-[140px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                        ID
                      </th>
                      <th class='min-w-[180px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                        Date
                      </th>
                      <th class='min-w-[180px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                        User
                      </th>
                      <th class='min-w-[180px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                        Title
                      </th>
                      <th class='px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                        Status
                      </th>
                      <th class='min-w-[100px] p-3 py-2 text-end text-sm font-semibold uppercase tracking-wider text-neutral-700'></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr class='border-b border-neutral-100 hover:bg-neutral-50'>
                      <td class='p-3 text-start font-semibold text-neutral-600'>
                        RN#4583
                      </td>
                      <td class='p-3 text-start text-neutral-600'>
                        2023-11-05 17:45
                      </td>
                      <td class='p-3 font-medium text-neutral-600'>
                        <a
                          href='javascript:void(0)'
                          class='underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300'
                        >
                          Samantha Davis
                        </a>
                      </td>
                      <td class='p-3 text-start'>
                        Issues Syncing Calendar Across Devices
                      </td>
                      <td class='p-3 font-medium'>
                        <div class='inline-block whitespace-nowrap rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold leading-4 text-blue-800'>
                          Awaiting Response
                        </div>
                      </td>
                      <td class='p-3 text-end font-medium'>
                        <a
                          href='javascript:void(0)'
                          class='inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200'
                        >
                          <span>View</span>
                          <svg
                            class='hi-mini hi-arrow-right inline-block h-5 w-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5'
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
                    <tr class='border-b border-neutral-100 hover:bg-neutral-50'>
                      <td class='p-3 text-start font-semibold text-neutral-600'>
                        RN#4582
                      </td>
                      <td class='p-3 text-start text-neutral-600'>
                        2023-10-30 08:00
                      </td>
                      <td class='p-3 font-medium text-neutral-600'>
                        <a
                          href='javascript:void(0)'
                          class='underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300'
                        >
                          Mindy O'Connell
                        </a>
                      </td>
                      <td class='p-3 text-start'>
                        Graphics Tablet Not Responding in Design Software
                      </td>
                      <td class='p-3 font-medium'>
                        <div class='inline-block whitespace-nowrap rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold leading-4 text-purple-800'>
                          New
                        </div>
                      </td>
                      <td class='p-3 text-end font-medium'>
                        <a
                          href='javascript:void(0)'
                          class='inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200'
                        >
                          <span>View</span>
                          <svg
                            class='hi-mini hi-arrow-right inline-block h-5 w-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5'
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
                    <tr class='border-b border-neutral-100 hover:bg-neutral-50'>
                      <td class='p-3 text-start font-semibold text-neutral-600'>
                        RN#4580
                      </td>
                      <td class='p-3 text-start text-neutral-600'>
                        2023-11-10 14:15
                      </td>
                      <td class='p-3 font-medium text-neutral-600'>
                        <a
                          href='javascript:void(0)'
                          class='underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300'
                        >
                          Helen Thompson
                        </a>
                      </td>
                      <td class='p-3 text-start'>
                        Payroll System Access Denied Error
                      </td>
                      <td class='p-3 font-medium'>
                        <div class='inline-block whitespace-nowrap rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold leading-4 text-orange-800'>
                          Under Investigation
                        </div>
                      </td>
                      <td class='p-3 text-end font-medium'>
                        <a
                          href='javascript:void(0)'
                          class='inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200'
                        >
                          <span>View</span>
                          <svg
                            class='hi-mini hi-arrow-right inline-block h-5 w-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5'
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
                    <tr class='border-b border-neutral-100 hover:bg-neutral-50'>
                      <td class='p-3 text-start font-semibold text-neutral-600'>
                        RN#4579
                      </td>
                      <td class='p-3 text-start text-neutral-600'>
                        2023-10-15 09:15
                      </td>
                      <td class='p-3 font-medium text-neutral-600'>
                        <a
                          href='javascript:void(0)'
                          class='underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300'
                        >
                          Peter Williams
                        </a>
                      </td>
                      <td class='p-3 text-start'>
                        CRM Tool Lagging and Freezing
                      </td>
                      <td class='p-3 font-medium'>
                        <div class='inline-block whitespace-nowrap rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold leading-4 text-emerald-800'>
                          Closed
                        </div>
                      </td>
                      <td class='p-3 text-end font-medium'>
                        <a
                          href='javascript:void(0)'
                          class='inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200'
                        >
                          <span>View</span>
                          <svg
                            class='hi-mini hi-arrow-right inline-block h-5 w-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5'
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
