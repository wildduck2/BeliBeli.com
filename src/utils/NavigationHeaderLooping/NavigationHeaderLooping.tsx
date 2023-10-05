import React from "react";
import { LinkButton } from "../../components/UI";

interface headerNavigationDataTypes {
  headerNavigationData: string[][][][];
}

const NavigationHeaderLooping = ({
  headerNavigationData,
}: headerNavigationDataTypes) => {
  const HeaderNavigationReactNode = headerNavigationData?.map((item, index) => {
    return (
      <div
        key={index}
        className="
          grid
          gap-5
        "
      >
        {item.map((child, index) => {
          return (
            <ul
              key={index}
              className="
                grid
                gap-1
              "
            >
              <h4
                className="
                  text-[.95rem]
                  font-semibold
                "
              >
                {child[0]}
              </h4>

              <div
                className="
                  grid
                  gap-1
                "
              >
                {child[1].map((item, index) => {
                  return (
                    <LinkButton
                      key={index}
                      href={item}
                      className=" 
                        text-[.67rem]
                        font-medium
                        text-[#222222]
                        transition-none
                        hover:text-red-600
                        hover:underline
                        "
                    >
                      {item}
                    </LinkButton>
                  );
                })}
              </div>
            </ul>
          );
        })}
      </div>
    );
  });

  return HeaderNavigationReactNode;
};

export default NavigationHeaderLooping;
