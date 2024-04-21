import Image from "next/image";
import Link from "next/link";
import Logo from "../../app/logo.png";

export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} height={100} width={100} alt="Big Ramp Logo"/>
          
        </Link>
        <nav>
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
      </div>
    </header>
  );
}
