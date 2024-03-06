import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 h-full w-full p-4 lg:p-6 flex items-center justify-between gap-4 bg-white border-b border-slate-200 text-slate-700">
      <Bars3Icon className="w-8" />
      <span className="grow text-xl font-bold leading-none">Dashboard</span>
      <ul className="flex items-center justify-center gap-2">
        <li className="list-none h-10 w-64 rounded-full bg-slate-200" />
        <li className="list-none h-10 w-10 rounded-full bg-slate-200" />
        <li className="list-none h-10 w-10 rounded-full bg-slate-200" />
        <li className="list-none h-10 w-10 rounded-full bg-slate-200">
          <Image
            alt="marnien-cueba-profile"
            src={"/marnien-cueba-profile.png"}
            width={40}
            height={40}
            priority
          />
        </li>
      </ul>
    </header>
  );
};
