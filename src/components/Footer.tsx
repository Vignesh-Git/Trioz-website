"use client";

import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import FooterNav from "./FooterNav";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <FooterNav />

      <div className="nc-Footer relative py-10 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex-shrink-0">
                <Logo />
              </div>
              <div className="text-neutral-600 dark:text-neutral-300 text-sm">
                Curated boutique, salon & makeup experiences — crafted for luxury.
              </div>
              <div>
                <SocialsList1 className="flex items-center space-x-3" />
              </div>
            </div>
            <div className="mt-6 border-t border-neutral-100 dark:border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
              <div>© {new Date().getFullYear()} Trioz Boutique. All rights reserved.</div>
              <div className="flex items-center gap-4 mt-3 sm:mt-0">
                <a className="hover:text-black dark:hover:text-white" href="#">Terms</a>
                <a className="hover:text-black dark:hover:text-white" href="#">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
