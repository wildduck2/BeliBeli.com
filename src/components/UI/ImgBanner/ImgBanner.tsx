import React from "react";
import { LinkButton, Skeleton } from "..";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";

interface ImgBannerProps {
  dataIndex: number;
}

const ImgBanner: React.FC<ImgBannerProps> = ({ dataIndex }) => {
  const selector = useSelector((state: RootState) => state.data);

  return (
    <div
      className="
        relative
        grid
        place-self-center
      "
    >
      {selector.satatus === "succeeded" ? (
        <>
          <LazyLoadImage
            className="h-[684px] w-[1024px]"
            src={selector.bannersData![dataIndex].top_img}
            draggable={false}
            width={1024}
            height={684}
            placeholderSrc={selector.bannersData![dataIndex].low_img}
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
              {selector.bannersData![dataIndex].title}
            </h2>
            <p
              className="
                mb-[1.2rem]
                text-[.9rem]
                text-white
              "
            >
              {selector.bannersData![dataIndex].subtitle}
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
              {selector.bannersData![dataIndex].button?.map((btn, index) => {
                return (
                  <LinkButton
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
                  </LinkButton>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <Skeleton className="h-[684px] w-[1024px] bg-[#1e242e6e]" />
        </>
      )}
    </div>
  );
};

ImgBanner.displayName = "ImgBanner";

export default ImgBanner;
