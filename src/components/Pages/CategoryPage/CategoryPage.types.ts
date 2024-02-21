import { BlackBannerWomen, RedBannerWomen } from '../../../constants';

// export interface CategoryPageTypes {
//   pageTile: string;
//   navigationLink: string[][][][];
//   routeText: string;
//   bannerIndexes: number[];
//   discrptionData: Record<
//     string,
//     {
//       title: JSX.Element;
//       disc: JSX.Element[];
//     }
//   >;
//   redBannerWomen: typeof RedBannerWomen;
//   blackBannerWomen: typeof BlackBannerWomen;
// }

export type CategoryDataType = {
  routeText: string;
  pageTile: string;
  navigationLink: string[][][][];
  // discrptionData: {
  //   1: {
  //     title: JSX.Element;
  //     disc: JSX.Element[];
  //   };
  //   2: {
  //     title: JSX.Element;
  //     disc: JSX.Element[];
  //   };
  // };
  bannerIndexes: number[];
  redBannerWomen: typeof RedBannerWomen;
  blackBannerWomen: typeof BlackBannerWomen;
};
