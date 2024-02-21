import React from 'react';

import { Link, Button, Input } from '../../UI';

import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram
} from 'react-icons/ai';
import { footerData } from '../../../constants';
import { logo } from '../../../assets';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <nav>
          <div>
            {footerData.map((data, index) => {
              return (
                <div key={index}>
                  {data.map((data, index) => {
                    return index === 0 ? (
                      <h5 key={index}>{data}</h5>
                    ) : (
                      <Link href={data} key={index}>
                        <p key={index}>{data}</p>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div>
            <h5>NEWSLETTER</h5>

            <p>
              be the first to know about our newest arrivals, special offers and
              store events near you.
            </p>

            <div>
              <form action="send">
                <div>
                  <Input
                    type="email"
                    required
                    placeholder="Enter Your Email Address"
                  />
                  <Button type="submit">SIGN UP</Button>
                </div>
              </form>
            </div>
          </div>
        </nav>

        <div className="footer__bottom">
          <h6>Customer Service</h6>
          <p>For Egypt 02-24803822</p>
          <p>
            We are open Saturday to Thursday 8 am to 9 pm & Friday 12 pm to 9 pm
            (Egypt local time, GMT +3)
          </p>

          <Link href={'/'}>
            <img src={logo} alt="footer__logo" />
          </Link>

          <div>
            <Link href="" target="_blank">
              <AiFillFacebook className={'fill-[#1e242e]'} size={25} />
            </Link>
            <Link href="" target="_blank">
              <AiOutlineTwitter className={'fill-[#1e242e]'} size={25} />
            </Link>
            <Link href="" target="_blank">
              <AiFillInstagram className={'fill-[#1e242e]'} size={25} />
            </Link>
          </div>

          <p>
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
