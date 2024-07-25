import Link from "next/link";
import Image from "next/image";

const navItems = {
  "/faq": {
    name: "FAQ",
  },
  "/fellows": {
    name: "Fellows",
  },
  "https://forms.gle/GU2kLMjrWgKxKJ1u7": {
    name: "Apply",
  },
};

export function Navbar() {
  return (
    <nav className="mb-16 py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <a href="/">
            <Image
              src="/logo.png"
              alt="Hackers Fund Logo"
              width={38}
              height={38}
            />
          </a>
          <Link
            href="/"
            className="text-[28px] font-semibold tracking-tighter pl-2.5"
          >
            Hackers <span className="font-semibold tracking-tighter">Fund</span>
          </Link>
        </div>
        <div className="flex flex-row gap-5 mt-6 md:mt-0 md:ml-auto">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
