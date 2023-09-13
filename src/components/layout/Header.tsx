import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/images/sys4-logo.svg';
import ThemeToggle from '../theme/ThemeToggle';

export default function Header() {
  return (
    <header className='px-8'>
      <div className='w-24 sm:w-32'>
        <Link href='/'>
          <Image src={Logo} alt='logo' />
        </Link>
      </div>
      <nav className='text-sm sm:text-base flex'>
        <ul className='flex items-center gap-2 sm:gap-4 list-none'>
          <li>
            <Link href='/sign_in'>Sign In</Link>
          </li>
          <li>
            <Link href='/sign_up'>Sign Up</Link>
          </li>
          <li>
            <Link href='/sign_in'>Sign Out</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
