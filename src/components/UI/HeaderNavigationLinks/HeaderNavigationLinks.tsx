import React from "react";

import {
  WoemnSideBarNavigation,
  categoryData,
  navigationLinks,
} from "../../../constants";
import { BannerDeals } from "@/components/Layouts";
import { useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "..";
import { NavigationHeaderLooping } from "@/utils";

const HeaderNavigationLinks = () => {
  const { pathname } = useLocation();
  const route = useNavigate();
  return (
    <>
      <NavigationMenu className="navigations">
        <NavigationMenuList className="navigations__list">
          {navigationLinks.map((link, index) => {
            return (
              <NavigationMenuItem
                key={index}
                className="navigations__list__item"
              >
                <NavigationMenuTrigger
                  className="navigations__list__item__link"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    route(`/${link}`, {
                      state: categoryData[index],
                    });
                  }}
                >
                  <h5 key={link}>{link.split("/")[1]}</h5>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="navigations__list__item__content">
                  <NavigationHeaderLooping
                    headerNavigationData={WoemnSideBarNavigation}
                    satatus={"succeeded"}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      {pathname === "/" && <BannerDeals />}
    </>
  );
};

export default HeaderNavigationLinks;
