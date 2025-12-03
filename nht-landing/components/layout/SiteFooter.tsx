import Link from "next/link";
import { Container } from "../ui/Container";

// Simple SVG icons to replace the font-based icons for better reliability
function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.495.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#011826] text-sm text-gray-200">
      <Container className="flex flex-col gap-10 py-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md space-y-4">
          <div className="text-lg font-semibold tracking-wide">
            Now Hair Time
          </div>
          <ul className="mt-2 space-y-2 text-xs text-gray-300">
            <li>
              <Link
                href="tel:+905386867042"
                className="transition hover:text-primary"
              >
                +90 538 686 70 42
              </Link>
            </li>
            <li>
              <Link
                href="mailto:info@nowhairtime.com"
                className="transition hover:text-primary"
              >
                info@nowhairtime.com
              </Link>
            </li>
            <li>
              <Link
                href="https://g.page/nowhairtime?share"
                className="transition hover:text-primary"
              >
                Fevzi Çakmak, Tevfik İleri Cad, Meşe Çk. No:2 Kat:3, 34899
                Pendik/İstanbul/Turkey
              </Link>
            </li>
          </ul>

          <div className="mt-4 flex gap-3 text-gray-400">
            <Link
              href="https://twitter.com/nowhairtime/"
              className="transition hover:text-primary"
              aria-label="X (formerly Twitter)"
            >
              <IconX className="h-5 w-5" />
            </Link>
            <Link
              href="https://youtube.com/channel/UC32oZ0QORUqAtVg6q-Ppu5g"
              className="transition hover:text-primary"
              aria-label="YouTube"
            >
              <IconYoutube className="h-5 w-5" />
            </Link>
            <Link
              href="https://facebook.com/nowhairtimeturkey/"
              className="transition hover:text-primary"
              aria-label="Facebook"
            >
              <IconFacebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com/now.hairtime/"
              className="transition hover:text-primary"
              aria-label="Instagram"
            >
              <IconInstagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="grid flex-1 gap-8 sm:grid-cols-2">
          <div>
            <div className="mb-3 text-sm font-semibold text-white">
              Services
            </div>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link
                  href="https://nowhairtime.com/hair-transplant-in-istanbul"
                  className="transition hover:text-primary"
                >
                  Hair Transplant
                </Link>
              </li>
              <li>
                <Link
                  href="https://nowhairtime.com/beard-transplant-in-turkey"
                  className="transition hover:text-primary"
                >
                  Beard Transplant
                </Link>
              </li>
              <li>
                <Link
                  href="https://nowhairtime.com/female-hair-transplant-in-turkey"
                  className="transition hover:text-primary"
                >
                  Female Hair Transplant
                </Link>
              </li>
              <li>
                <Link
                  href="https://nowhairtime.com/mustache-transplant-in-turkey"
                  className="transition hover:text-primary"
                >
                  Mustache Transplant
                </Link>
              </li>
              <li>
                <Link
                  href="https://nowhairtime.com/dental-treatments"
                  className="transition hover:text-primary"
                >
                  Dental Treatments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-white">Help</div>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link
                  href="https://nowhairtime.com/blog"
                  className="transition hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://nowhairtime.com/privacy-and-security-policy"
                  className="transition hover:text-primary"
                >
                  Privacy and Security Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://nowhairtime.com/media-news"
                  className="transition hover:text-primary"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="https://nowhairtime.com/contact"
                  className="transition hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://nowhairtime.com/page/cookie-policy"
                  className="transition hover:text-primary"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://nowhairtime.com/page/personal-data"
                  className="transition hover:text-primary"
                >
                  Personal Data
                </Link>
              </li>
              <li>
                <Link
                  href="https://nowaesthetic.com/"
                  className="transition hover:text-primary"
                >
                  Now Aesthetic
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-4 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <div>
            <strong className="font-semibold text-gray-200">
              Now Hair Time
            </strong>{" "}
            ©2018 - 2025. All rights reserved.
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <Link
              href="https://api.whatsapp.com/send/?phone=905545769958"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-black transition hover:bg-primary-dark"
            >
              <IconWhatsApp className="h-4 w-4" />
              <span>Write Us</span>
            </Link>

            <div className="flex items-center gap-3 text-xs">
              <IconInstagram className="h-4 w-4 text-gray-400" />
              <span>
                Don&apos;t forget to follow our{" "}
                <strong className="font-semibold">Instagram page!</strong>
              </span>
              <Link
                href="https://instagram.com/now.hairtime/"
                className="rounded-md border border-white/40 px-3 py-1 text-xs font-semibold text-white transition hover:border-primary hover:text-primary"
              >
                Follow
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
