import React from 'react';
import { CardInfoTypes } from '../Swiper.types';

const CardInfo = ({ choosen, discount, price, title }: CardInfoTypes) => {
  return (
    <div className="card__slider-info">
      {/* Heart Icon*/}
      <span className={`recomended ${choosen && 'show'}`}>
        {!choosen ? 'null' : choosen}
      </span>

      <h3>{title}</h3>

      <div className="costs">
        {/* checking if no discount show the solid price wihtout line through */}
        <div className={`discount ${discount && 'show__discount'}`}>
          <span>EGP</span> <span>{price}</span>
        </div>

        {/* checking if there is a discount so show discount  */}
        {discount && (
          <div className="price">
            <span>EGP</span> <span>{discount}</span>
          </div>
        )}
      </div>

      {/* checking if there is a discount so show save  */}
      {discount && (
        <span className="save">{`(save ${Math.round(
          100 - (parseInt(discount) / parseInt(price!)) * 100
        )}%)`}</span>
      )}
    </div>
  );
};

export default CardInfo;
