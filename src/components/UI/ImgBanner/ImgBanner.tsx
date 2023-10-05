import React from "react";
import Link from "../Link";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImgBannerProps {
  img: string;
  title: string | null;
  subtitle: string | null;
  buttonData: Array<string>;
}

const ImgBanner: React.FC<ImgBannerProps> = ({
  img,
  subtitle,
  title,
  buttonData,
}) => {
  return (
    <div
      className="
        relative
        grid
        place-self-center
      "
    >
      <LazyLoadImage
        src={img}
        draggable={false}
        // placeholderSrc={img1.lowReseloution}
        loading="lazy"
        effect="opacity"
        alt="banner img"
      />

      <div className="layout"></div>

      <div
        className="
          absolute
          bottom-[2.5rem]
          left-[50%]
          grid
          translate-x-[-50%]
          items-center
          gap-0
          text-center
          font-medium
        "
      >
        <h2
          className="
            mb-1
            whitespace-nowrap
            text-[2.58rem]
            font-semibold
            text-white  
          "
        >
          {title}
        </h2>
        <p
          className="
          mb-[1.2rem]
          text-[.9rem]
          text-white
        "
        >
          {subtitle}
        </p>

        <div
          className="
            flex
            items-center
            justify-center
            gap-[1.8rem]
            text-[.8rem]
          "
        >
          {buttonData.map((btn, index) => {
            return (
              <Link
                key={index}
                href={btn}
                className="
                  pointer
                  whitespace-nowrap
                  bg-white
                  px-[1.2rem]
                  py-[.7rem]
                  font-semibold
                  text-blackThree
                "
              >
                {btn}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

ImgBanner.displayName = "ImgBanner";

export default ImgBanner;
