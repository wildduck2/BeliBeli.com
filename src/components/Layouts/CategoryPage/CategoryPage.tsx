import React from "react";
import { ImgBanner } from "../../UI";
import { NavigationHeaderLooping } from "../../../utils/";
import { ColorfulBanner } from "..";
import { useMatch } from "react-router-dom";
import { useCategoryData } from "@/hooks";

const CategoryPage = () => {
  const match = useMatch("/category/:id");
  const { data, error, status } = useCategoryData({
    id: match?.params.id?.toLowerCase() as string,
  });

  console.log(status);

  return (
    <>
      <main className="category-page">
        <span>{data?.routeText}</span>

        <div className="category-page__wrapper">
          <div className="category-page__wrapper__sidebar">
            {
              <NavigationHeaderLooping
                headerNavigationData={data?.navigationLink}
                satatus={status}
              />
            }
          </div>
          <div className="category-page__wrapper__content">
            <h1>{data?.pageTile}</h1>

            {/* Hero Section */}
            <section className="category-page__wrapper__content__hero">
              {/* RedBanner Section */}
              <ColorfulBanner
                title={data?.redBannerWomen.title}
                description={data?.redBannerWomen.description}
                supTitle={data?.redBannerWomen.subtitle}
                buttonText={data?.redBannerWomen.Links}
                color={data?.redBannerWomen.ColorfulBanner}
                satatus={status}
              />

              <ImgBanner dataIndex={data?.bannerIndexes[0]} satatus={status} />
              <ImgBanner dataIndex={data?.bannerIndexes[1]} satatus={status} />

              {/* BlackBanner Section */}
              <ColorfulBanner
                title={data?.blackBannerWomen.title}
                description={data?.blackBannerWomen.description}
                supTitle={data?.blackBannerWomen.subtitle}
                buttonText={data?.blackBannerWomen.Links}
                color={data?.blackBannerWomen.ColorfulBanner}
                satatus={status}
              />
            </section>
            <section className="category-page__wrapper__content__disc">
              {status === "succeeded" ? (
                Object.entries(data!.discrptionData).map(([key, value]) => (
                  <div key={key}>
                    {value.title}
                    {value.disc.map((item) => item)}
                  </div>
                ))
              ) : (
                <h1>laoding...</h1>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryPage;
