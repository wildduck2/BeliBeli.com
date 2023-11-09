import React from "react";

import { CategoryPage } from "../../../Layouts";

import {
  MenCaregory,
  MenHeaderNavigationLink,
  MenSideBarNavigation,
} from "../../../../constants";
import { banner10, banner2, banner4 } from "../../../../assets";

const Men = () => {
  const bannersData = [
    {
      img: banner4,
      title: `AUTUMN LOOKBOOK 2023`,
      subtitle: `Your seasonal styling guide has arrived`,
      buttons: ["Casual", "Smart", "Street"],
    },
    {
      img: banner2,
      title: `All that glitters isn't gold`,
      subtitle: `sometimes it's silver.`,
      buttons: ["Shop now"],
    },
    {
      img: banner10,
      title: `All that glitters isn't gold`,
      subtitle: `sometimes it's silver.`,
      buttons: ["Shop now"],
    },
  ];

  return (
    <CategoryPage
      routeText="Home / Men"
      pageTile={"Men"}
      navigationLink={MenSideBarNavigation as string[][][][]}
      categoryData={MenCaregory}
      banners={bannersData}
      swiperFetchSwiperData={"MenPage"}
    />
  );
};

export default Men;
