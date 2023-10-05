import React from "react";
import { twMerge } from "tailwind-merge";

import Link from "../../UI/Link";
import { Button } from "../../UI";
import Input from "../../UI/Input";

import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { footerData } from "../../../constants";
import { logo } from "../../../assets";

const Footer = () => {
  return (
    <footer
      className=" 
      bg-[#e4e4e4]
        pb-7
        pt-8
    "
    >
      <div
        className="
          section
          footer__container   
          max-w-[1150px] 
      "
      >
        <nav
          className="
            mb-[8rem]
            flex
            justify-between
            
        "
        >
          <div
            className="
              flex
              w-full
              max-w-[60%]
              justify-between
          "
          >
            {footerData.map((data, index) => {
              return (
                <div key={index}>
                  {data.map((data, index) => {
                    return index === 0 ? (
                      <h5
                        key={index}
                        className="
                          mb-3
                          font-semibold
                        "
                      >
                        {data}
                      </h5>
                    ) : (
                      <Link href={data} key={index}>
                        <p key={index} className="mb-3 font-medium">
                          {data}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div
            className="
              max-w-[25%]
          "
          >
            <h5
              className="
                mb-3
              "
            >
              NEWSLETTER
            </h5>

            <p
              className="
               mb-[3rem]
              "
            >
              be the first to know about our newest arrivals, special offers and
              store events near you.
            </p>

            <div>
              <form action="send">
                <div
                  className="
                    jsutify-center
                    flex
                    items-center
                "
                >
                  <Input
                    className="
                      h-[35px]
                      w-[200px]
                      border-b
                      border-b-blackOne
                      p-[.5rem]
                    placeholder:text-[.813rem]
                    placeholder:font-semibold
                      placeholder:text-blackOne
                      focus:outline-none
                    "
                    type="email"
                    required
                    placeholder="Enter Your Email Address"
                  />
                  <Button
                    type="submit"
                    className="
                      w-[100px]
                      rounded-none
                      bg-blackOne
                      p-[.5rem]
                      text-[.813rem]
                      font-semibold
                      text-white
                    "
                  >
                    SIGN UP
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </nav>

        <div
          className="
            copyright
            mx-auto
            grid
            w-full
            max-w-[600px]
            text-center
        "
        >
          <h6
            className="
            mb-[.4rem]
              text-[.72rem]
              font-semibold
              text-black
            "
          >
            Customer Service
          </h6>
          <p
            className="
            text-[.72rem]
              font-semibold
              text-black
            "
          >
            For Egypt 02-24803822
          </p>
          <p
            className={twMerge(`'
             '
             mb-[.6rem]
             text-[.7rem]
           font-medium`)}
          >
            We are open Saturday to Thursday 8 am to 9 pm & Friday 12 pm to 9 pm
            (Egypt local time, GMT +3)
          </p>

          <Link
            href={"/"}
            className="
              grid
              justify-self-center
            "
          >
            <img
              className="
                mb-[1.6rem]
                flex
                w-[150px]
                justify-self-center
              "
              src={logo}
              alt="footer__logo"
            />
          </Link>

          <div
            className="
              mb-6
              flex
              place-content-center
              items-center
              gap-3
          "
          >
            <Link href="" target="_blank">
              <AiFillFacebook className={"fill-[#1e242e]"} size={25} />
            </Link>
            <Link href="" target="_blank">
              <AiOutlineTwitter className={"fill-[#1e242e]"} size={25} />
            </Link>
            <Link href="" target="_blank">
              <AiFillInstagram className={"fill-[#1e242e]"} size={25} />
            </Link>
          </div>

          <p
            className="
              mb-[.9rem]
            "
          >
            © BeliBeli's business concept is to offer fashion and quality at
            the best price in a sustainable way. BeliBeli has since it was
            founded in 1947 grown into one of the world's leading fashion
            companies. The content of this site is copyright-protected and is
            the property of BeliBeli Hennes & Mauritz AB.
          </p>

          <p>Egypt</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
