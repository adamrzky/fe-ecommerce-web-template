'use client';

import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DashboardLayout({ children }) {
  const pathname = usePathname();
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href='/'>
          <span className='self-center text-lg font-semibold whitespace-nowrap dark:text-white'>
            Home
          </span>
        </Navbar.Brand>
        <div className='flex md:order-2'></div>
        <Navbar.Collapse>
          <Navbar.Link
            href='/dashboard/transactions'
            as={Link}
            {...(pathname === '/dashboard/transactions'
              ? { active: true }
              : {})}
          >
            Transactions
          </Navbar.Link>
          <Navbar.Link
            href='/dashboard/categories'
            as={Link}
            {...(pathname === '/dashboard/categories' ? { active: true } : {})}
          >
            Categories
          </Navbar.Link>
          <Navbar.Link
            href='/dashboard/products'
            as={Link}
            {...(pathname === '/dashboard/products' ? { active: true } : {})}
          >
            Products
          </Navbar.Link>
          <Navbar.Link
            href='/my-transactions'
            as={Link}
            {...(pathname === '/my-transactions' ? { active: true } : {})}
          >
            My Transactions
          </Navbar.Link>
          <Navbar.Link
            href='/my-reviews'
            as={Link}
            {...(pathname === '/my-reviews' ? { active: true } : {})}
          >
            My Reviews
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <main id='page-content' class='flex max-w-full flex-auto flex-col'>
        {children}
      </main>
    </>
  );
}