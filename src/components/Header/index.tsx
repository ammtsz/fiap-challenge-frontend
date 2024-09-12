"use client"

import { useUserContext } from "@/contexts/user";
import { Greeting } from "./Greeting";
import { LoginLogout } from "./loginLogout";

export const Header: React.FC = () => {
  const {user: { username, email }} = useUserContext();

  return (
    <header className="h-[var(--navbar-height)] flex justify-between items-center sm:px-16 px-8 bg-primary text-white font-inter font-bold">
      <h1 className="text-nowrap text-2xl">
        <a className="flex" href="/"><span className="hidden md:block mr-2">Escola</span>CMS</a>
      </h1>
      <nav className="w-full ml-8">
        <ul className="flex justify-between items-center">
          <li className="text-lg hidden lg:block mr-8"><a href="/">Home</a></li>
          {/* TODO: implement search bar */}
          <span className="hidden md:block mr-8 w-full" id="search-bar"/>
          <div className="flex ml-auto">
            {(username || email) && <Greeting />}
            <LoginLogout />
          </div> 
        </ul>
      </nav>
    </header>
  );
}