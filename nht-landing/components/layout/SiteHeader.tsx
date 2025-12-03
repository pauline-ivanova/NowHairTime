import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";

const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "Our Services", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Media News", href: "#" },
  { label: "Contact", href: "#" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-gray-800 bg-nav-dark">
      <Container className="flex h-20 items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
          >
            <span className="inline-flex items-center">
              <Image
                src="https://nowhairtime.com/assets/pages/img/logo.svg"
                alt="Now Hair Time"
                width={180}
                height={48}
                priority
              />
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-xs font-medium text-white lg:flex">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden items-center gap-2 rounded-md bg-primary px-5 py-2 text-xs font-semibold text-[#011826] shadow-sm transition hover:bg-primary-dark lg:inline-flex">
            <span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5"
                  y="3"
                  width="14"
                  height="18"
                  rx="2"
                  stroke="#011826"
                  strokeWidth="1.6"
                />
                <path
                  d="M8 8H16M8 12H14M8 16H12"
                  stroke="#011826"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>Get an Offer</span>
          </button>

          <button
            type="button"
            className="hidden items-center justify-between rounded-md border border-white/30 bg-transparent px-3 py-2 text-[11px] font-semibold text-white hover:border-white lg:inline-flex"
          >
            <span>EN</span>
            <span className="ml-1 text-[10px]">▾</span>
          </button>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-600 bg-nav-dark text-white lg:hidden"
            aria-label="Open menu"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </Container>
    </header>
  );
}


