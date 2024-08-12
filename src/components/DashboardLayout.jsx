'use client';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { useState } from 'react';

export function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const { user, logout } = useAuthStore();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }; 

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  }

  return (
    <>
      <div className="flex">
        <div
          className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transition-transform transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <aside id="default-sidebar" className="fixed bg-gray-800 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className='w-full my-5'>
              <h1 className='font-semibold text-2xl text-center'>Go-Template</h1>
            </div>
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                
                <ul className="space-y-2 font-medium">
                  <li>
                      <a href="/dashboard" className={`flex items-center p-2 rounded-lg text-white hover:bg-gray-700  group ${pathname === "/dashboard" && 'bg-gray-700'}`}>
                        <svg className={`w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white ${
                          pathname === "/dashboard" && 'text-white'
                        }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span className="ms-3">Dashboard</span>
                      </a>
                  </li>
                  <li>
                      <a href="/dashboard/transactions" className={`flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group ${pathname === "/dashboard/transactions" && 'bg-gray-700'}`}>
                      <svg className={`w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white ${pathname === "/dashboard/transactions" && 'text-white'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                      </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Transactions</span>
                      </a>
                  </li>
                  <li>
                      <a href="/dashboard/categories" className={`flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group ${pathname === "/dashboard/categories" && 'bg-gray-700'}`}>
                      <svg className={`w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white ${pathname === "/dashboard/categories" && 'text-white'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                    </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Categories</span>
                      </a>
                  </li>
                  <li>
                      <a href="/dashboard/products" className={`flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group ${pathname === "/dashboard/products" && 'bg-gray-700'}`}>
                        <svg className={`w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white ${pathname === "/dashboard/products" && 'text-white'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                      </a>
                  </li>
                  <li>
                      <a href="/account" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                        <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                      </a>
                  </li>
                  <li>
                      <a href="#" onClick={handleLogout} className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                        <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                      </a>
                  </li>
                </ul>
            </div>
          </aside>

        </div>

        <div
          className={`flex-1 min-h-screen transition-all duration-300 ${
            isOpen ? 'ml-64' : 'ml-0'
          }`}
        >
          <div className="p-4">
            <button
              onClick={toggleSidebar}
              className="px-2 py-2 bg-gray-800 text-white rounded focus:outline-none"
            >
              {isOpen ? <>
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
              </> : 
              <>
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
              </>}
            </button>
          </div>
          <main id='page-content' className='flex flex-col flex-auto max-w-full'>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
