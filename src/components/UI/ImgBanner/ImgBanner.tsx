import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { AsyncImage } from "loadable-image";

import { LinkButton, Skeleton } from "..";

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
          <AsyncImage
            src={selector.bannersData![dataIndex].top_img}
            aria-description="this is an img for some events click on some links on this banner to get there"
            style={{ width: 1026, height: 684 }}
            loader={<div style={{ background: "#1e242e6e" }} />}
            error={<div style={{ background: "#222" }} />}
            alt="this is a banner img for some events"
          />

          <div className="layout" aria-hidden="true"></div>

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
          <Skeleton
            className="h-[684px] w-[1026px] bg-[#1e242e6e]"
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
};

ImgBanner.displayName = "ImgBanner";

export default ImgBanner;
