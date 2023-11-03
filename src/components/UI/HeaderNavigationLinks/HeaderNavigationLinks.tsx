import React from "react";

import LinkButton from "../Link";

import { navigationLinks } from "../../../constants";
import { BannerDeals } from "@/components/Layouts";

const HeaderNavigationLinks = () => {
  return (
    <>
      <ul
        className="
            flex
            items-center
            justify-center
            gap-6
            py-[1.8rem]
          "
      >
        {navigationLinks.map((link, index) => {
          return (
            <li key={index}>
              <LinkButton
                href={link}
                className="
                  transtion-border
                  hover:opacity-1
                  border-b
                  border-b-transparent
                  pb-[.2rem]
                  font-medium
                  text-blackOne
                  hover:border-b-blackOne
                  lg:text-[1rem]
                "
              >
                {link}
              </LinkButton>
            </li>
          );
        })}
      </ul>
      <BannerDeals />
    </>
  );
};

export default HeaderNavigationLinks;
