import React from "react";
import { ImgBanner, StyledByYouWrapper, SwiperSectionWrapper } from "../../UI";
import { CategoryBanner } from "../../Layouts";
import { ColorfulBanner } from "@/components/Layouts/ColorfulBanner/ColorfulBanner";
import { BlackBannerHome, RedBannerHome } from "@/constants";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";

const Home = () => {
  const satatus = useSelector((state: RootState) => state.data.satatus);

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="hero__section">
          {/* RedBanner Section */}
          <ColorfulBanner
            title={RedBannerHome.title}
            description={RedBannerHome.description}
            supTitle={RedBannerHome.subtitle}
            buttonText={RedBannerHome.Links}
            color={RedBannerHome.ColorfulBanner}
          />

          {/* <ImgBanner dataIndex={0} /> */}

          {/* BlackBanner Section */}
          <ColorfulBanner
            title={BlackBannerHome.title}
            description={BlackBannerHome.description}
            supTitle={BlackBannerHome.subtitle}
            buttonText={BlackBannerHome.Links}
            color={BlackBannerHome.ColorfulBanner}
          />

          <CategoryBanner dataIndex={0} satatus={satatus} />
        </section>

        {/* Hero Section */}
        <section className="trending__section">
          <SwiperSectionWrapper />
        </section>

        <section className="banner__section">
          <ImgBanner dataIndex={1} />
          <ImgBanner dataIndex={2} />
          <ImgBanner dataIndex={3} />
          <ImgBanner dataIndex={4} />
        </section>

        <section className="styledByYou__section">
          <StyledByYouWrapper />
        </section>
      </main>
    </>
  );
};

export default Home;
