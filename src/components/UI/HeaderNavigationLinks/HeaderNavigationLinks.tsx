import React from 'react'
import LinkButton from "../Link";

import { navigationLinks } from "../../../constants";
import { BannerDeals } from "@/components/Layouts";

const HeaderNavigationLinks = () => {
  return (
    <>
      <ul className="navigations">
        {navigationLinks.map((link, index) => {
          return (
            <li key={index}>
              <LinkButton href={link} className="navigations__link">
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
