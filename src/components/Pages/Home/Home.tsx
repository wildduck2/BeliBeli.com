import { MutableRefObject, Suspense, useRef } from "react";
import { RootState } from "@/context/store";
import { useSelector } from "react-redux";

import { ImgBanner, MagazineCard, Navigation, LinkButton } from "../../UI";
import { CategoryBanner, Filter, Swiper } from "../../Layouts";
import PaginationStep from "../../../utils/PaginationStep";
import PaginationIndex from "../../../utils/PaginationIndex/idnex";
import PaginationDot from "../../Layouts/Swiper/PaginationDot";

import { magazine } from "../../../constants";

const Home = () => {
  const pagenaationRef1 = useRef() as MutableRefObject<HTMLDivElement>;
  const swiperContainerRef1 = useRef() as MutableRefObject<HTMLUListElement>;
  const swiperContainerRef2 = useRef() as MutableRefObject<HTMLUListElement>;
  const swiperContainerRef3 = useRef() as MutableRefObject<HTMLUListElement>;
  const swiperContainerRef4 = useRef() as MutableRefObject<HTMLUListElement>;

  const selector = useSelector((state: RootState) => state.data);

  return (
    <>
      <main
        className="
        container
        mx-auto
        grid
        pt-[1rem]
      "
      >
        {/* Hero Section */}
        <section className="section  pt-0">
          <ImgBanner dataIndex={0} />

          <CategoryBanner categoryData={selector.categoriesData} />

          {/* Trending Now Section */}
          <section className="section">
            <div>
              <h2
                className="
                  text-start
                  text-[1.2rem]
                  font-semibold
                "
              >
                Trending Now
              </h2>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-[3.5rem]
                "
              >
                {/* filter */}
                <Filter />
                {/* navigation */}
                <Navigation
                  navigationFunction={PaginationIndex}
                  DOT_REF={pagenaationRef1}
                  SWIPER_REF={swiperContainerRef1}
                />
              </div>
            </div>

            {/* swiper */}
            <Swiper
              filterSwiper={true}
              ref={swiperContainerRef1}
              DOT_REF={pagenaationRef1}
              SWIPER__REF={swiperContainerRef1}
            />

            {/* Pagination Dot */}
            <div
              className="
                pagination_container 
                flex
                items-center
                justify-center
                gap-2
              "
              ref={pagenaationRef1}
            >
              <PaginationDot />
              <PaginationDot />
            </div>
          </section>

          {/* Recomended for you Section*/}
          <section
            className="
              section
              relative
              pb-8
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
              navigationFunction={PaginationStep}
              flex_mode={true}
              btnClassName="navigation_flex"
              SWIPER_REF={swiperContainerRef2}
            />

            {/* swiper */}
            {/* <Swiper
              fetchFileName="recommendedForYou"
              ref={swiperContainerRef2}
              SWIPER__REF={swiperContainerRef2}
            /> */}
          </section>

          {/* Banner2 Section */}
          <section className="section pb-6 pt-0">
            <ImgBanner dataIndex={1} />
          </section>

          {/* Banner3 Section */}
          <section className="section pb-6 pt-0">
            <ImgBanner dataIndex={2} />
          </section>

          {/* Customers Also Viewed Section*/}
          <section
            className="
              section
              relative
              pb-8
              pt-0
            "
          >
            <h2
              className="
                text-center
                text-[1.2rem]
                font-semibold
              "
            >
              Customers Also Viewed
            </h2>
            {/* navigation */}
            <Navigation
              navigationFunction={PaginationStep}
              flex_mode={true}
              btnClassName="navigation_flex"
              SWIPER_REF={swiperContainerRef3}
            />

            {/* swiper */}
            {/* <Swiper
              fetchFileName="CustomersAlsoViewed"
              ref={swiperContainerRef3}
              SWIPER__REF={swiperContainerRef3}
            /> */}
          </section>

          {/* Magazine Section */}
          <section className="styledByYou__section section">
            <div>
              <h3>Styled by you</h3>
              <p>
                We love to see how you style your favourites from BeliBeli: Keep
                sharing your personal style with @BeliBeli and #BeliBelixME for
                a chance to be featured at hm.com, in our marketing materials
                and in our stores.
              </p>

              <LinkButton href={`/BeliBeli`}>Visit BeliBeli</LinkButton>
            </div>

            <div>
              {/* navigation */}
              <Navigation
                navigationFunction={PaginationStep}
                flex_mode={true}
                btnClassName="navigation_flex"
                SWIPER_REF={swiperContainerRef4}
                className="styled"
              />

              {/* swiper */}
              {/* <Swiper
                fetchFileName="syteledByYou"
                ref={swiperContainerRef4}
                SWIPER__REF={swiperContainerRef4}
              /> */}
            </div>
          </section>

          {/* Magazine Section */}
          <section className="magazine__section">
            <div className="section magazine__container">
              <h2>MAGAZINE</h2>

              <LinkButton href={"/Magazine"}>READ BeliBeli MAGAZINE</LinkButton>

              <div>
                {magazine.map((data, index) => {
                  return (
                    <MagazineCard
                      key={index}
                      img={data.img}
                      title={data.title}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
