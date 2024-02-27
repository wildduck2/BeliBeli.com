import React, { useRef } from 'react'
import CardInfo from '@/components/Layouts/Swiper/CardInfo'
import { SwiperCardProps } from './SwiperCard.types'
import {
  ToggleProdutFavorite,
  cardImgHoverHandler,
  cardImgLeaveHandler
} from '@/utils'
import { AsyncImage } from 'loadable-image'
import { useNavigate } from 'react-router-dom'
import { HiOutlineHeart } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/context'

const SwiperCard: React.FC<SwiperCardProps> = ({
  item,
  favouriteItem,
  width = 245,
  height = 350
}) => {
  const route = useNavigate()
  const userSession = useSelector((state: RootState) => state.user.userSession)
  const userData = useSelector((state: RootState) => state.user.userData)
  const dispatch = useDispatch()
  const heartRef = useRef<HTMLDivElement>(null)

  const favoriteProduct = {
    id: item?.id!,
    user_id: userSession?.id!,
    title: item?.title!,
    product_type: item?.product_type[0]!
  }

  return (
    <div
      className="swiper__card swiper-slide swiper-slide-active swiper-slide-next"
      onClick={(e) => {
        if (e.target !== heartRef.current) {
          window.scrollTo(0, 0)
          route(`/product-show/${item?.title}`, {
            state: item
          })
        }
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

        <div
          className={`heart ${
            userData?.favourite_products.some(
              (item) => item.id === favoriteProduct.id
            ) && 'active'
          }`}
          ref={heartRef}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            ToggleProdutFavorite({
              e: e,
              dispatch,
              favourite_product: favoriteProduct,
              favourite_products: userData?.favourite_products!
            })
          }}>
          <HiOutlineHeart size={30} />
        </div>
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
