import React from "react";

import { CategoryPage } from "../../../Layouts";

import {
  DividedCaregory,
  DividedSideBarNavigation,
} from "../../../../constants";
import { banner6, banner7, banner9 } from "../../../../assets";

const Divided = () => {
  const bannersData = [
    {
      img: banner6,
      title: `It's cabin chic, but not really`,
      subtitle: `Styles inspired by the great outdoors.`,
      buttons: ["Shop now"],
    },
    {
      img: banner7,
      title: `All that glitters isn't gold`,
      subtitle: `sometimes it's silver`,
      buttons: ["Shop now"],
    },
    {
      img: banner9,
      title: `New season`,
      subtitle: `New arrivals`,
      buttons: ["Shop now"],
    },
  ];

  return (
    <CategoryPage
      routeText="Home / Divided"
      pageTile={"Divided"}
      navigationLink={DividedSideBarNavigation as string[][][][]}
      categoryData={DividedCaregory}
      banners={bannersData}
      swiperFetchSwiperData={"DividedPage"}
    />
  );
};
export default Divided;
