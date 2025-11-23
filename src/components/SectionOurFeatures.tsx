import React, { FC } from "react";
import rightImgPng from "@/images/our-features.png";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";
import dynamic from "next/dynamic";

const PremiumReveal = dynamic(() => import("@/components/PremiumReveal"), { ssr: false });

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <PremiumReveal variant="image-shimmer" delay={120} className="w-full">
          <Image src={rightImg} alt="" />
        </PremiumReveal>
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >

<span className="uppercase text-sm text-gray-400 tracking-widest">
          Benefits
        </span>
        <h2 className="font-semibold text-4xl mt-5">Why Trioz?</h2>

        <ul className="space-y-10 mt-10">
          <li className="space-y-4">
            <PremiumReveal variant="fade-right" delay={120}>
              <Badge name="Boutique" />
            </PremiumReveal>
            <PremiumReveal variant="fade-right" delay={180} className="block mt-5 text-neutral-500 dark:text-neutral-400">
              <span>
                Explore our collection of handcrafted boutique jewels, designed to
                embody luxury and timeless elegance while helping you attract
                refined customers who appreciate premium craftsmanship and
                distinctive style.
              </span>
            </PremiumReveal>
          </li>
          <li className="space-y-4">
            <PremiumReveal variant="fade-right" delay={220}>
              <Badge color="green" name="Salon" />
            </PremiumReveal>
            <PremiumReveal variant="fade-right" delay={280} className="block mt-5 text-neutral-500 dark:text-neutral-400">
              <span>
                Salon’s signature treatments and expert styling,
                delivering a luxurious experience that invites clients seeking
                refined beauty services, personalized care, and a premium
                atmosphere you can trust.
              </span>
            </PremiumReveal>
          </li>
          <li className="space-y-4">
            <PremiumReveal variant="fade-right" delay={320}>
              <Badge color="red" name="Makeup" />
            </PremiumReveal>
            <PremiumReveal variant="fade-right" delay={380} className="block mt-5 text-neutral-500 dark:text-neutral-400">
              <span>
                Presenting elite makeup artistry with flawlessly curated
                looks, offering clients a high-end beauty experience that blends
                precision, luxury, and radiant creativity for every occasion and
                event.
              </span>
            </PremiumReveal>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
