import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";
import type { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Beard Transplant Turkey – Cost, Before/After & Free Consultation",
  description:
    "Natural, permanent beard transplant in Istanbul with FUE & DHI techniques, all-inclusive packages with hotel, VIP transfers and medical aftercare.",
  keywords: [
    "beard transplant turkey",
    "beard transplant istanbul",
    "beard transplant cost",
    "facial hair restoration",
    "FUE beard transplant",
    "DHI beard transplant"
  ],
  alternates: {
    canonical: "https://nowhairtime.com/beard-transplant-turkey",
  },
  icons: {
    icon: [
      "https://nowhairtime.com/favicon-32x32.png",
      "https://nowhairtime.com/favicon-96x96.png",
      "https://nowhairtime.com/favicon-16x16.png",
      "https://nowhairtime.com/favicon.ico"
    ]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="bg-background text-text font-sans">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
