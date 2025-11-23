import { Poppins } from "next/font/google";
import SiteHeader from "./(client-components)/(Header)/SiteHeader";
import { Playfair_Display } from "next/font/google";
import ClientCommons from "./ClientCommons";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import dynamic from "next/dynamic";

const FullPagePreloader = dynamic(() => import("@/components/FullPagePreloader"), { ssr: false });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        {/* Inline script to set preloading state immediately before content renders */}
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(){try{document.documentElement.classList.add('is-preloading')}catch(e){} })();",
          }}
        />
      </head>
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        {/* Server-rendered static preloader so users don't see the page before JS hydrates */}
        <div id="preloader-static" className="preloader-root preloader-visible" aria-hidden="true">
          <div className="preloader-inner">
            <div className={`preloader-logo ${playfair.className}`}>
              <div className="preloader-badge" aria-hidden>
                T
              </div>
            </div>
            <div className="preloader-dots" aria-hidden>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="preloader-text mt-6">Trioz Boutique</div>
          </div>
        </div>
  <FullPagePreloader playfairClassName={playfair.className} />
        <ClientCommons />
        <SiteHeader />
        {children}
        <FooterNav />
        <Footer />
      </body>
    </html>
  );
}
