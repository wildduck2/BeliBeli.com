import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../context/store";
import { ImgBanner, MagazineCard, Link } from "../../UI";
import { CategoryBanner, Filter, Swiper, SwiperSmall } from "../../Layouts";
import { magazine } from "../../../constants";

const Home = () => {
  const selector = useSelector((state: RootState) => state.data);
  const selector2 = useSelector((state: RootState) => state.util);

  return (
    <>
      <main>
        {/* Hero Section */}
        <section>
          <div>
            <ImgBanner dataIndex={0} />
            <CategoryBanner categoryData={selector.categoriesData} />
          </div>
        </section>

        {/* Hero Section */}
        <section className="trending__section">
          <div>
            <div className="trending__section__header">
              <h2>Trending Now</h2>
              <div className="trending__section__header__filter">
                <Filter />
              </div>
            </div>
            <Swiper
              FILTER__QUERY={selector2.currentFilter}
              DATA__NAME={selector.products}
            />
          </div>
        </section>

        <section className="recommended__section">
          <div>
            <h2>Recommended for you</h2>
          </div>
          <Swiper
            FILTER__QUERY={selector2.currentFilter}
            DATA__NAME={selector.products}
          />
        </section>

        <section>
          <div>
            <ImgBanner dataIndex={1} />
          </div>
        </section>

        <section>
          <div>
            <ImgBanner dataIndex={2} />
          </div>
        </section>

        <section className="customersAlsoViewed__section">
          <div>
            <h2>Customers Also Viewed</h2>
          </div>

          <Swiper
            FILTER__QUERY={selector2.currentFilter}
            DATA__NAME={selector.products}
          />
        </section>

        <section className="styledByYou__section">
          <div className="styledByYou__section__header">
            <h3>Styled by you</h3>
            <p>
              We love to see how you style your favourites from BeliBeli: Keep
              sharing your personal style with @BeliBeli and #BeliBelixME for a
              chance to be featured at hm.com, in our marketing materials and in
              our stores.
            </p>

            <Link href={`/BeliBeli`}>Visit BeliBeli</Link>
          </div>

          <div className="styledByYou__section__content">
            <SwiperSmall
              FILTER__QUERY="styledbyyou"
              DATA__NAME={selector.products}
            />
          </div>
        </section>

        <section className="magazine__section">
          <div className="magazine__container">
            <h2>MAGAZINE</h2>

            <Link href={"/Magazine"}>READ BeliBeli MAGAZINE</Link>

            <div>
              {magazine.map((data, index) => {
                return (
                  <MagazineCard key={index} img={data.img} title={data.title} />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
