"use client";

import Link from "next/link";
import Image from "next/image";

const navItems = [
  { path: "/faq", name: "FAQ" },
  { path: "/fellows", name: "Fellows" },
  {
    path: "https://forms.gle/GU2kLMjrWgKxKJ1u7",
    name: "Apply",
    isButton: true,
  },
];

export function Navbar() {
  return (
    <nav className="mb-16 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center">
          <a href="/">
            <Image
              src="/logo.png"
              alt="Hackers Fund Logo"
              width={38}
              height={38}
              className="px-2 py-2 bg-[#F26522] text-white rounded-md font-medium"
            />
          </a>
          <Link href="/" className="text-[26px] font-semibold tracking-tight pl-2.5">
            Hackers Fund
          </Link>
        </div>
        <div className="flex mt-4 md:mt-0 space-x-6 items-center">
          {navItems.map(({ path, name, isButton }) =>
            isButton ? (
              <a
                key={path}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-[#F26522] text-white rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                {name}
              </a>
            ) : (
              <Link
                key={path}
                href={path}
                className="font-medium transition-all"
              >
                {name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
