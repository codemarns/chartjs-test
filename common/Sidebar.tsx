import Link from "next/link";
import Image from "next/image";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

export const Sidebar = () => {
  return (
    <aside className="fixed inset-0 right-auto h-screen w-72 bg-white border-r border-slate-200 grid grid-rows-[80px,_128px,_1fr,_48px]">
      <div className="h-full flex-1 px-6 flex items-center gap-3">
        <Image alt="" src={"/mc-logo.svg"} width={28} height={28} priority />
        <span className="text-2xl text-slate-700 font-bold leading-none">
          codemarns
        </span>
      </div>

      <div className="h-auto w-full bg-primary-50" />

      <nav className="flex-1 p-4">
        <ul className="flex-1 space-y-2">
          <li className="list-none flex-1 flex">
            <Link
              href={"/"}
              className="h-10 flex-1 px-4 flex items-center gap-3 rounded bg-primary text-white"
            >
              <Squares2X2Icon className="w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="list-none flex-1 flex">
            <Link
              href={"/"}
              className="h-10 flex-1 px-4 flex items-center gap-3 rounded bg-white hover:bg-purple-100 text-slate-700 duration-150 ease-in-out transition-all"
            >
              <Squares2X2Icon className="w-5" />
              <span>Analytics</span>
            </Link>
          </li>
          <li className="list-none flex-1 flex">
            <Link
              href={"/"}
              className="h-10 flex-1 px-4 flex items-center gap-3 rounded bg-white hover:bg-purple-100 text-slate-700 duration-150 ease-in-out transition-all"
            >
              <Squares2X2Icon className="w-5" />
              <span>Sales</span>
            </Link>
          </li>
          <li className="list-none flex-1 flex">
            <Link
              href={"/"}
              className="h-10 flex-1 px-4 flex items-center gap-3 rounded bg-white hover:bg-purple-100 text-slate-700 duration-150 ease-in-out transition-all"
            >
              <Squares2X2Icon className="w-5" />
              <span>Inventory</span>
            </Link>
          </li>
          <li className="list-none flex-1 flex">
            <Link
              href={"/"}
              className="h-10 flex-1 px-4 flex items-center gap-3 rounded bg-white hover:bg-purple-100 text-slate-700 duration-150 ease-in-out transition-all"
            >
              <Squares2X2Icon className="w-5" />
              <span>Stocks</span>
            </Link>
          </li>
          <li className="list-none flex-1 flex">
            <Link
              href={"/"}
              className="h-10 flex-1 px-4 flex items-center gap-3 rounded bg-white hover:bg-purple-100 text-slate-700 duration-150 ease-in-out transition-all"
            >
              <Squares2X2Icon className="w-5" />
              <span>Reports</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="h-12 flex-1" />
    </aside>
  );
};
