'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink ({ href, children }) {
  const path = usePathname();

  return (
    <li>
      <Link href={href} className={href.startsWith(path) ? 'active' : ''}>
        {children}
      </Link>
    </li>
  );
}