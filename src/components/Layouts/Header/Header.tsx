import React from "react";

import Link from "../../UI/Link";

import { logo, notfication, shoppinsCard } from "../../../assets";
import Search from "../../UI/Search";

const Header = () => {
  return (
    <header>
      <nav
        className="
          container
          mx-auto
          px-5
          py-[.4rem]
        "
      >
        {/* main header */}
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          {/* search bar */}
          <Search />

          {/* logo */}
          <Link href="/" className="w-[140px]">
            <img
              className="
                pt-.5rem
                ml-[-5rem]
              "
              src={logo}
              alt="logo img"
            />
          </Link>

          {/* extra functions */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <video
              src={shoppinsCard}
              className="
                h-[30px]
                w-[30px]
              "
            />
            <video
              src={notfication}
              className="
                h-[30px]
                w-[30px]
              "
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
