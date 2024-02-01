import React from "react";
import LinkButton from "../Link";

import { navigationLinks } from "../../../constants";
import { BannerDeals } from "@/components/Layouts";
import { useLocation } from "react-router-dom";

const HeaderNavigationLinks = () => {
  const { pathname } = useLocation();
  return (
    <>
      <>
        <ul className="navigations">
          {navigationLinks.map((link, index) => {
            return (
              <li key={index}>
                <LinkButton href={`/${link}`} key={link} className="navigations__link">
                  {link.split('/')[1]}
                </LinkButton>
              </li>
            );
          })}
        </ul>
        {pathname === "/" && <BannerDeals />}
      </>
    </>
  );
};

export default HeaderNavigationLinks;
