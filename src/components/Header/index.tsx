"use client"

import { useUserContext } from "@/contexts/user";
import { SearchBar } from "@/components/SearchBar";
import { Greeting } from "./Greeting";
import { LoginLogout } from "./LoginLogout";
import { usePathname } from 'next/navigation';

const PAGES_WITH_SEARCH_BAR = ['/', '/admin', '/posts']

export const Header: React.FC = () => {
  const {user: { username, email }} = useUserContext();
  const pathname = usePathname();

  const hasSearchBar = PAGES_WITH_SEARCH_BAR.includes(pathname)

  return (
    <header className="h-[var(--navbar-height)] flex justify-between items-center sm:px-16 px-8 bg-primary text-white font-inter font-bold">
      <h1 className="text-nowrap text-2xl">
        <a className="flex" href="/"><span className="hidden md:block mr-2">Escola</span>CMS</a>
      </h1>
      <nav className="w-full ml-8">
        <ul className="flex justify-between items-center">
          <li className="text-lg hidden lg:block mr-8"><a href="/">Home</a></li>
          <li className="hidden md:block mr-8 w-full max-w-2xl m-auto">
            {hasSearchBar && <SearchBar/>}
          </li>
          <div className="flex ml-auto">
            {(username || email) && <Greeting />}
            <LoginLogout />
          </div> 
        </ul>
      </nav>
    </header>
  );
}