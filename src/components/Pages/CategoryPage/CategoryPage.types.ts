import { BlackBannerWomen, RedBannerWomen } from "../../../constants";

export interface CategoryPageTypes {
  pageTile: string;
  navigationLink: string[][][][];
  routeText: string;
  bannerIndexes: number[];
  discrptionData: Record<
    string,
    {
      title: JSX.Element;
      disc: JSX.Element[];
    }
  >;
  redBannerWomen: typeof RedBannerWomen;
  blackBannerWomen: typeof BlackBannerWomen;
}
