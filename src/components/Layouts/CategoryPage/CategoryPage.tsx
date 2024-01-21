import React, { MutableRefObject, useRef } from "react";
import { ImgBanner, Navigation } from "../../UI";
import NavigationHeaderLooping from "../../../utils/NavigationHeaderLooping";
import { CategoryBanner, Swiper } from "..";
import PaginationStep from "../../../utils/PaginationStep";
import { WomenHeaderNavigationLink } from "../../../constants";

interface BannersData {
  img: string;
  title: string | null;
  subtitle: string | null;
  buttons: string[];
}

interface CategoryData {
  name: string;
  tag: string;
  img: string;
}

interface CategoryPageTypes {
  pageTile: string;
  categoryData: CategoryData[] | null;
  banners: BannersData[];
  swiperFetchSwiperData: string;
  navigationLink: string[][][][];
  routeText: string;
}

const CategoryPage: React.FC<CategoryPageTypes> = ({
  pageTile,
  categoryData,
  banners,
  swiperFetchSwiperData,
  navigationLink,
  routeText,
}) => {
  const swiperContainerRef1 = useRef() as MutableRefObject<HTMLUListElement>;

  const HeaderNavigationReactNode = NavigationHeaderLooping({
    headerNavigationData: navigationLink,
  });

  console.log(banners);

  return (
    <>
      {/* TODO: choos the right html el for the side bar for screen readers */}

      <div
        className="
          flex
          place-content-center
          text-[.8rem]
        "
      >
        {routeText}
      </div>

      <div
        className="
          container
          mx-auto
          flex
          justify-between
          px-[1.5rem]
        "
      >
        <div className="mt-[2rem]">
          <nav
            className="
              grid
              gap-5
            "
          >
            {HeaderNavigationReactNode}
          </nav>
        </div>

        <main
          className="
            grid
            pt-[1rem]
            lg:max-w-[950px]
          "
        >
          <h1
            className="
              mb-4
              border-b-2
              border-b-gray-200
              pb-4
              text-center
              text-4xl
              font-semibold
              uppercase
            "
          >
            {pageTile}
          </h1>

          {/* Hero Section */}
          <section
            className="
              section 
              px-[24px]
              pt-0  
              lg:max-w-[905px]
            "
          >
            {/* TODO: craete a low resloution src img for lazy loading */}
            <ImgBanner dataIndex={0} />

            {categoryData && (
              <CategoryBanner
                categoryData={categoryData}
                className="small_banner"
              />
            )}
          </section>

          {/* Recomended for you Section*/}
          <section
            className="
              section
              relative
              px-[24px]
              pb-8  
              lg:max-w-[950px]
            "
          >
            <h2
              className="
                text-center
                text-[1.2rem]
                font-semibold
              "
            >
              Recommended for you
            </h2>
            {/* navigation */}
            <Navigation
              className="small_nagiation"
              navigationFunction={PaginationStep}
              flex_mode={true}
              btnClassName="navigation_flex"
              SWIPER_REF={swiperContainerRef1}
            />

            {/* swiper */}
            {/* <Swiper
            DATA__NAME={swiperFetchSwiperData}
            FILTER__QUERY="women"
            /> */}
          </section>

          {/* Banner2 Section */}

          <div className="px-[24px]  lg:max-w-[950px]">
            {banners.map((data, index) => {
              return (
                index !== 0 && (
                  <section
                    key={index}
                    className="section px-[24px] pb-6 pt-0 lg:max-w-[950px]"
                  >
                    <ImgBanner dataIndex={index} />
                  </section>
                )
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default CategoryPage;
