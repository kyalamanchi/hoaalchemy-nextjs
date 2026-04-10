'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/features/financial', label: 'Overview', exact: true },
  { href: '/features/financial/invoicing', label: 'Invoicing' },
  { href: '/features/financial/accounting', label: 'Accounting' },
  { href: '/features/financial/budgets', label: 'Budgets & Reports' },
  { href: '/features/financial/bank-integration', label: 'Bank Integration' },
  { href: '/features/financial/tax', label: 'Tax Compliance' },
  { href: '/features/financial/reserves', label: 'Reserves' },
];

function FinancialSubNav() {
  const pathname = usePathname();

  return (
    <div className="financial-subnav">
      <div className="container">
        <nav className="financial-subnav-inner">
          {links.map((link) => {
            const active = link.exact
              ? pathname === link.href
              : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`financial-subnav-item${active ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default FinancialSubNav;
