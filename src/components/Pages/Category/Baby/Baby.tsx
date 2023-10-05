import React from "react";
import { CategoryPage } from "../../../Layouts";
import { BabayHeaderNavigationLink } from "../../../../constants";
import { banner14, banner15, banner21 } from "../../../../assets";

const Baby = () => {
  const bannersData = [
    {
      img: banner14,
      title: `Build your baby room`,
      subtitle: `Home essentials and styling ideas for the nursery`,
      buttons: ["Show now"],
    },
    {
      img: banner21,
      title: `Baby autumn fashion`,
      subtitle: `Stunning autumn styles for sweet babies`,
      buttons: ["Shop now"],
    },
    {
      img: banner15,
      title: `New Arrivals`,
      subtitle: `Must have styles from EGP 299.`,
      buttons: ["New arrivals", "Dresses", "Rompers", "Sets & Outfits"],
    },
  ];

  return (
    <CategoryPage
      routeText="Home / Baby"
      pageTile={"Baby"}
      navigationLink={BabayHeaderNavigationLink as string[][][][]}
      categoryData={null}
      banners={bannersData}
      swiperFetchSwiperData={"WoemnPage"}
    />
  );
};

export default Baby;
