"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky z-10 top-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black py-5 backdrop-blur-sm bg-opacity-90 shadow-md">
      <nav className=" w-9/12 flex flex-row mx-auto">
        <div className="uppercase text-lg basis-1/4">
          {" "}
          {/* Logo  */}
          <a href="#">
            <span className="font-extrabold text-white">EYOO </span>
            <span className="font-extralight text-blue-400">RAM</span>
          </a>
        </div>
        <div className="basis-1/2 flex items-center justify-evenly">
          {" "}
          {/* Link  */}
          <Link
            href="/"
            className="hover:text-blue-400 hover:transition-all "
          >
            <span>Home</span>
          </Link>
          {/* <a
            href="#services"
            className="hover:text-blue-400 hover:transition-all"
          >
            <span>Services</span>
          </a> */}
          <Link
            href="/portofolio"
            className="hover:text-blue-400 hover:transition-all "
          >
            <span>Portofolios</span>
          </Link>
          {/* <Link
            href="/blog"
            className="hover:text-blue-400 hover:transition-all "
          >
            <span>Blogs</span>
          </Link> */}
          <Link
            href="/certificate"
            className="hover:text-blue-400 hover:transition-all "
          >
            <span>Certificates</span>
          </Link>
          <Link
            href="/contactMe"
            className="hover:text-blue-400 hover:transition-all "
          >
            <span>Contact</span>
          </Link>
        </div>
        <div className="basis-1/4 flex justify-end">
          {" "}
          {/* dark mode  */}
          {/* tombol dark mode  */}
          <span className="hidden dark:inline end:0">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                className="fill-sky-400/20"
              ></path>
              <path
                d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                className="fill-sky-500"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                className="fill-sky-500"
              ></path>
            </svg>
          </span>
        </div>
      </nav>
    </header>
  );
}
