import React from 'react'
import CardInfo from '@/components/Layouts/Swiper/CardInfo'
import { SwiperCardProps } from './SwiperCard.types'
import { cardImgHoverHandler, cardImgLeaveHandler } from '@/utils'
import { AsyncImage } from 'loadable-image'
import { useNavigate } from 'react-router-dom'

const SwiperCard: React.FC<SwiperCardProps> = ({
  item,
  favouriteItem,
  width = 245,
  height = 350
}) => {
  const route = useNavigate()
  return (
    <div
      className="swiper__card"
      onClick={() => {
        window.scrollTo(0, 0)
        route(`/product-show/${item?.title}`, {
          state: item
        })
      }}>
      <div
        className="img__wrapper"
        onMouseLeave={cardImgLeaveHandler}
        onMouseOver={(e) => cardImgHoverHandler(e)}>
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <AsyncImage
              key={index}
              src={
                item?.product_type[0].top_imgs[index] ||
                favouriteItem?.product_type.top_imgs[index]!
              }
              srcSet={
                item?.product_type[0].low_imgs[index] ||
                favouriteItem?.product_type.low_imgs[index]
              }
              loading="lazy"
              style={{ width: width, height: height }}
              draggable={false}
              alt={item?.title || favouriteItem?.title}
            />
          )
        })}
        <div className="img__wrapper__overlay">
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <div
                key={index}
                className={`dot ${index === 0 ? 'active' : ''}`}></div>
            )
          })}
        </div>
      </div>

      {/*card information */}
      <CardInfo
        choosen={item?.choosen || favouriteItem?.choosen}
        discount={
          item?.product_type[0].sizes[0]?.discount ||
          favouriteItem?.product_type.sizes[0]?.discount
        }
        price={
          item?.product_type[0].sizes[0]?.price ||
          favouriteItem?.product_type.sizes[0]?.price
        }
        title={item?.title || favouriteItem?.title!}
      />
    </div>
  )
}

export default SwiperCard
