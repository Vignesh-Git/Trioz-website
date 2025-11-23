"use client";

import React, { FC, ReactNode } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "./StayCard";
import StayCard2 from "./StayCard2";

// OTHER DEMO WILL PASS PROPS
// Include first 12 demo items so each tab (Bridal Makeup / Boutique / Salon) can display up to 4 items
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 12);

//
export interface SectionGridFeaturePlacesProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: "card1" | "card2";
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
  stayListings = DEMO_DATA,
  gridClass = "",
  heading = "Gallery",
  subHeading = "Discover the artistry behind our services through stunning visuals",
  headingIsCenter,
  tabs = ["Bridal Makeup", "Boutique", "Salon"],
  cardType = "card1",
}) => {
  const [activeTab, setActiveTab] = React.useState<string>(tabs?.[0] || "");

  React.useEffect(() => {
    // keep activeTab in sync if parent changes tabs
    if (!tabs?.includes(activeTab)) {
      setActiveTab(tabs?.[0] || "");
    }
  }, [tabs]);

  const handleClickTab = (item: string) => {
    setActiveTab(item);
  };

  const filteredListings = stayListings.filter((s) => {
    if (!activeTab) return true;
    const catName = s.listingCategory?.name || "";
    return catName.toLowerCase().includes(activeTab.toLowerCase());
  });

  // limit to 4 items per tab
  const visibleListings = filteredListings.slice(0, 4);

  const renderCard = (stay: StayDataType) => {
    let CardName = StayCard;
    switch (cardType) {
      case "card1":
        CardName = StayCard;
        break;
      case "card2":
        CardName = StayCard2;
        break;

      default:
        CardName = StayCard;
    }

    return <CardName key={stay.id} data={stay} />;
  };

  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <HeaderFilter
        tabActive={activeTab}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
        onClickTab={handleClickTab}
      />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {visibleListings.length ? (
          visibleListings.map((stay) => renderCard(stay))
        ) : (
          <div className="col-span-full text-center py-12 text-sm text-neutral-500">
            No items found for “{activeTab}”.
          </div>
        )}
      </div>
      {/* <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary loading>Show me more</ButtonPrimary>
      </div> */}
    </div>
  );
};

export default SectionGridFeaturePlaces;
