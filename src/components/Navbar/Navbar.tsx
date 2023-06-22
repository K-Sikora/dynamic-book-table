import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="h-20 bg-orange-700 z-10 absolute top-0 left-0 w-full px-4">
      <div className="max-w-6xl h-full items-center mx-auto flex justify-between">
        <Link
          className="flex items-center gap-2"
          href="/"
        >
          <Image
            alt="site logo"
            src="/logo.png"
            width={32}
            height={32}
          />
          <h2 className="text-white font-semibold text-sm">
            Dynamic Book Table
          </h2>
        </Link>
        <Link href="https://github.com/K-Sikora/dynamic-book-table">
          <FaGithub
            size={26}
            className="text-white"
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
