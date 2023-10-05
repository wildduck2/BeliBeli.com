import React from "react";

import { CategoryPage } from "../../../Layouts";

import { banner20, banner3, banner8 } from "../../../../assets";
import { WoemnSideBarNavigation, WomenCaregory } from "../../../../constants";

const Women = () => {
  const bannersData = [
    {
      img: banner8,
      title: null,
      subtitle: null,
      buttons: ["Shop now"],
    },
    {
      img: banner20,
      title: `Dress days`,
      subtitle: `Dressy ot casual - pick your fave.`,
      buttons: ["Shop now"],
    },
    {
      img: banner3,
      title: `New season`,
      subtitle: `Blouses with feminine details to fall in love with.`,
      buttons: ["Shop now"],
    },
  ];

  return (
    <CategoryPage
      routeText="Home /Women"
      pageTile="Women"
      navigationLink={WoemnSideBarNavigation}
      categoryData={WomenCaregory}
      banners={bannersData}
      swiperFetchSwiperData={"WoemnPage"}
    />
  );
};

export default Women;
