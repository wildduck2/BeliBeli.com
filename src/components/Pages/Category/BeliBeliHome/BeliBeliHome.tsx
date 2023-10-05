import React from "react";

import { CategoryPage } from "../../../Layouts";

import {
  BeliBeliHomeSideBarNavigation,
  DividedCaregory,
} from "../../../../constants";
import { banner16, banner17 } from "../../../../assets";

const BeliBeliHome = () => {
  const bannersData = [
    {
      img: banner16,
      title: `Hotel-style bathroom refresh`,
      subtitle: `Update your bathroom with high-quality towels and home fragrances.`,
      buttons: ["Shop now"],
    },
    {
      img: banner17,
      title: `FALL 2023`,
      subtitle: `Details you will love forever`,
      buttons: ["Shop now"],
    },
  ];

  return (
    <CategoryPage
      routeText="Home / BeliBeli Home"
      pageTile={"BeliBeli Home"}
      navigationLink={BeliBeliHomeSideBarNavigation as string[][][][]}
      categoryData={DividedCaregory}
      banners={bannersData}
      swiperFetchSwiperData={"BeliBeli Home"}
    />
  );
};

export default BeliBeliHome;
