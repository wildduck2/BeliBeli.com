import React from "react";

import Link from "../Link";

import { navigationLinks } from "../../../constants";

const HeaderNavigationLinks = () => {
  return (
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
            <Link
              href={link}
              className="
                    transtion-border
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
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderNavigationLinks;
