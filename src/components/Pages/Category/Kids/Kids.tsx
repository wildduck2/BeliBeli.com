import React from "react";

import { CategoryPage } from "../../../Layouts";

import { KidsCaregory, KidsHeaderNavigationLink } from "../../../../constants";
import { banner11, banner12, banner13, banner5 } from "../../../../assets";

const Kids = () => {
  const bannersData = [
    {
      img: banner11,
      title: `Trick or trend`,
      subtitle: `Party ready styles are in.`,
      buttons: ["Show now"],
    },
    {
      img: banner12,
      title: `Ghosts jsut wana have fun`,
      subtitle: `get into the spirit -- it's time trick-or-treating.`,
      buttons: ["Shop now"],
    },
    {
      img: banner13,
      title: `A/W 2023`,
      subtitle: `Standout styles for every day of their week.`,
      buttons: ["Shop now"],
    },
    {
      img: banner5,
      title: `A/W 2023`,
      subtitle: `Cooler days call for knits, coats, and boots made for the outdoors.`,
      buttons: ["Girls 2-8y", "Boys 2-8y"],
    },
  ];

  return (
    <CategoryPage
      pageTile={"Kids"}
      navigationLink={KidsHeaderNavigationLink as string[][][][]}
      categoryData={KidsCaregory}
      banners={bannersData}
      swiperFetchSwiperData={"WoemnPage"}
    />
  );
};

export default Kids;
