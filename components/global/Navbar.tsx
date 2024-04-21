import Image from "next/image";
import Link from "next/link";
import Logo from "../../app/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section>
      <header className="py-6 px-6 border-b border-zinc-800 z-30 mb-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={Logo} height={100} width={100} alt="Big Ramp Logo" />
          </Link>
          <nav className="lg:block hidden">
            <ul className="flex items-center gap-x-8">
              <li>
                <Link
                  href="/about"
                  className="hover:text-purple-400 duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/exhibitions"
                  className="hover:text-purple-400 duration-300"
                >
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link
                  href="https://big-ramp.beehiiv.com/subscribe"
                  className="hover:text-purple-400 duration-300"
                >
                  Newsletter Signup
                </Link>
              </li>
            </ul>
          </nav>
          <div className="lg:hidden block relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
            {showMenu && (
              <div onClick={() => setShowMenu(!showMenu)} className="mobile-menu justify-evenly underline text-white font-bold fixed bg-black top-0 left-0 w-full bg-opacity-75 z-40">
                <ul className="flex flex-col items-center h-full gap-y-4 py-4 px-3">
                  <li>
                    <Link
                      href="/about"
                      className="text-lg hover:text-purple-400 duration-300"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/exhibitions"
                      className=" text-lg hover:text-purple-400 duration-300"
                    >
                      Exhibitions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://big-ramp.beehiiv.com/subscribe"
                      className=" text-lg hover:text-purple-400 duration-300"
                    >
                      Newsletter Signup
                    </Link>
                  </li>
                </ul>
              

              </div>
            )}
          </div>
        </div>
      </header>
    </section>
  );
}