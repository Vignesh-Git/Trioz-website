import React, { FC } from "react";
import imagePng from "@/images/hero-right.png";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("@/components/Typewriter"), { ssr: false });
const StartExploringButton = dynamic(() => import("@/components/StartExploringButton"), { ssr: false });
const PremiumReveal = dynamic(() => import("@/components/PremiumReveal"), { ssr: false });

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <PremiumReveal variant="fade-up" delay={120}>
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Boutique, Makeup & Salon
              <Typewriter text=" Services" typingSpeed={70} loop={false} />
            </h2>
          </PremiumReveal>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Accompanying us, you have a trip full of experiences. With Trioz
            Boutique, discover curated stays and on-demand beauty services —
            from boutique shopping to professional makeup and salon bookings.
          </span>
          <StartExploringButton />
        </div>
        <div className="flex-grow">
          <PremiumReveal variant="image-shimmer" delay={200} className="w-full">
            <Image className="w-full" src={imagePng} alt="hero" priority />
          </PremiumReveal>
        </div>
      </div>

      {/* <div className="block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm />
      </div> */}
    </div>
  );
};

export default SectionHero;
