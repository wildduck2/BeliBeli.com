import React, { MutableRefObject, useRef } from "react";
import { ImgBanner, Navigation } from "../../UI";
import { NavigationHeaderLooping } from "../../../utils/";
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

  console.log(banners);

  return (
    <>
      {/* TODO: choos the right html el for the side bar for screen readers */}
      <main className="category-page">
        <span>{routeText}</span>

        <div>
          <div>
            {<NavigationHeaderLooping headerNavigationData={navigationLink} />}
          </div>

          <div>
            <h1>{pageTile}</h1>

            {/* Hero Section */}
            <section className="category-page__hero">
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
            <section className="category-page__hero">
              <h2>Recommended for you</h2>

              {/* swiper */}
              <Swiper
                DATA__NAME={swiperFetchSwiperData}
                FILTER__QUERY="women"
              />
            </section>

            {/* Banner2 Section */}
            <div className="category-page__banners">
              {banners.map((data, index) => {
                return (
                  index !== 0 && (
                    <section key={index}>
                      <ImgBanner dataIndex={index} />
                    </section>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryPage;
