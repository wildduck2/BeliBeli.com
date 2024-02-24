import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Button,
  ProductReviews,
  ProductShowAccordionWrapper,
  RatingStars,
  ShareProductWrapper,
  Skeleton
} from '@/components/UI'
import { AsyncImage as LazyImg } from '@/components/Layouts'
import { Product } from '@/context/Data/Data.types'
import { Heart } from 'lucide-react'
import { AiOutlineShopping } from 'react-icons/ai'
import { GoPackageDependents } from 'react-icons/go'
import { fastshiping } from '@/assets'
import useGetReviews from '@/hooks/useGetReviews/useGetReviews'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, addProductToFavorite } from '@/context/utils/Utils'
import { RootState } from '@/context/store'
import { useUser } from '@/hooks'
import { PushProductCart, PushProductFavorite } from '@/utils'

const height = 883.567

const ProductShow = () => {
  const [currentTypeIndex, setCurrentTypeIndex] = React.useState<number>(0)
  const [currentSizeIndex, setCurrentSizeIndex] = React.useState<number>(0)
  const mainImgsRef = useRef<HTMLDivElement>(null)

  const { state } = useLocation()
  const product: Product = state

  const [reviews, error] = useGetReviews({
    reviews_id: product.review_id
  })

  const logged = useSelector((state: RootState) => state.data.logged)
  const favouriteProducts = useSelector(
    (state: RootState) => state.util.favouriteProducts
  )
  const cartProducts = useSelector(
    (state: RootState) => state.util.cartProducts
  )
  const dispatch = useDispatch()

  const user = useUser({ signedout: logged })
  const cartProduct = {
    id: product.id,
    user_id: user[0]?.id!,
    name: product.title,
    price: parseInt(
      product.product_type[currentTypeIndex].sizes[currentSizeIndex].price
    ),
    discount: parseInt(
      product.product_type[currentTypeIndex].sizes[currentSizeIndex].discount!
    ),
    img: product.product_type[currentTypeIndex].low_imgs[0],
    art_no: product.product_type[currentTypeIndex].art_no,
    color: product.product_type[currentTypeIndex].name,
    size: product.product_type[currentTypeIndex].sizes[currentSizeIndex].size,
    quantity: 1
  }

  const favoriteProduct = {
    id: product.id,
    user_id: user[0]?.id!,
    created_at: product.created_at,
    type: product.type,
    title: product.title,
    description: product.description,
    product_type: product.product_type[currentTypeIndex],
    product_category: product.product_category,
    review_id: product.review_id,
    treding: product.treding,
    choosen: product.choosen,
    fit: product.fit
  }

  return (
    <>
      <main className="products-show">
        <span>{`Home / Sale / ${product.type} / ${product.product_category} / ${product.title}`}</span>

        <div className="products-show__wrapper">
          <div className="products-show__wrapper__main">
            <div
              className="products-show__wrapper__main__imgs"
              ref={mainImgsRef}>
              <LazyImg
                src={product.product_type[currentTypeIndex].top_imgs[0]}
                srcSet={product.product_type[currentTypeIndex].low_imgs[0]}
                alt={product.title}
                style={{ width: '100%', height: height }}
                draggable={false}
              />
              <LazyImg
                src={product.product_type[currentTypeIndex].top_imgs[1]}
                srcSet={product.product_type[currentTypeIndex].low_imgs[1]}
                alt={product.title}
                style={{ width: '100%', height: height }}
                draggable={false}
              />

              <div className="products-show__wrapper__main__imgs__info">
                <p>{product.description}</p>

                <div>
                  <span>FIT:</span>
                  <span>{product.fit}</span>
                </div>

                <div>
                  <span>Art. No.:</span>
                  <span>{product.product_type[currentTypeIndex].art_no}</span>
                </div>

                <Button variant={'link'}>DETAILS</Button>
              </div>

              <LazyImg
                src={product.product_type[currentTypeIndex].top_imgs[2]}
                srcSet={product.product_type[currentTypeIndex].low_imgs[2]}
                alt={product.title}
                style={{ width: '100%', height: height }}
                draggable={false}
              />
              <LazyImg
                src={product.product_type[currentTypeIndex].top_imgs[3]}
                srcSet={product.product_type[currentTypeIndex].low_imgs[3]}
                alt={product.title}
                style={{ width: '100%', height: height }}
                draggable={false}
              />
              <LazyImg
                src={product.product_type[currentTypeIndex].top_imgs[4]}
                srcSet={product.product_type[currentTypeIndex].low_imgs[4]}
                alt={product.title}
                style={{ width: '100%', height: height }}
                draggable={false}
              />
              <LazyImg
                src={product.product_type[currentTypeIndex].top_imgs[5]}
                srcSet={product.product_type[currentTypeIndex].low_imgs[5]}
                alt={product.title}
                style={{ width: '100%', height: height }}
                draggable={false}
              />
            </div>

            <div className="products-show__wrapper__main__info">
              <h1>{product.title}</h1>

              <div className="products-show__wrapper__main__info__prize">
                <div>
                  <h2>
                    EGP{' '}
                    {
                      product.product_type[currentTypeIndex].sizes[
                        currentSizeIndex
                      ].price
                    }
                  </h2>
                  {product.product_type[currentTypeIndex].sizes[
                    currentSizeIndex
                  ].discount && (
                    <>
                      <h2>
                        EGP{' '}
                        {
                          product.product_type[currentTypeIndex].sizes[
                            currentSizeIndex
                          ].discount
                        }
                      </h2>
                      <span>
                        (save{' '}
                        {`${(
                          (parseInt(
                            product.product_type[currentTypeIndex].sizes[
                              currentSizeIndex
                            ].discount!
                          ) ||
                            199 /
                              parseInt(
                                product.product_type[currentTypeIndex].sizes[
                                  currentSizeIndex
                                ].price
                              )) * 100
                        ).toFixed()}%`}
                        )
                      </span>
                    </>
                  )}
                </div>

                <span>Inclusive of VAT</span>
              </div>

              <div className="products-show__wrapper__main__info__package-type">
                <img
                  src={fastshiping}
                  width={27}
                  alt="package type"
                  draggable={false}
                />
                <span>Same Day Delivery Available</span>
              </div>

              <div className="products-show__wrapper__main__info__review">
                {reviews !== null ? (
                  reviews.reviews.length > 0 && (
                    <RatingStars
                      readOnly={true}
                      value={
                        reviews.reviews
                          .map((item) => item.overall_rating)
                          .reduce((a, b) => a + b, 0) / reviews.reviews.length
                      }
                      precision={0.5}
                    />
                  )
                ) : (
                  <Skeleton className="skeleton" />
                )}
              </div>

              <div className="products-show__wrapper__main__info__varients">
                <div>
                  <span>{product.product_type[currentTypeIndex].name}</span>
                  <div>
                    {product.product_type.map((item, index) => {
                      return (
                        <Button
                          key={index}
                          variant={'ghost'}
                          onClick={() => {
                            setCurrentTypeIndex(index)
                            const imgs = mainImgsRef.current?.querySelectorAll(
                              '.lazyLoaingImg-wrapper'
                            )
                            imgs?.forEach((img) =>
                              img.classList.remove('show--img')
                            )
                          }}>
                          <LazyImg
                            key={index}
                            src={item.icon}
                            alt={product.title}
                            clickable={true}
                            className={`${currentTypeIndex === index && 'active'}`}
                            loading="lazy"
                            draggable={false}
                          />
                        </Button>
                      )
                    })}
                  </div>
                </div>
                <div>
                  <Button variant={'link'}>size Guide</Button>
                </div>
              </div>

              <div className="products-show__wrapper__main__info__sizes">
                <span>
                  Size:
                  {` ${product.product_type[currentTypeIndex].sizes[currentSizeIndex].size}`}
                </span>

                <div>
                  {product.product_type[currentTypeIndex].sizes.map(
                    (item, index) => {
                      return (
                        <Button
                          key={index}
                          variant={'outline'}
                          className={`${currentSizeIndex === index && 'active'}`}
                          onClick={() => setCurrentSizeIndex(index)}>
                          {item.size}
                        </Button>
                      )
                    }
                  )}
                </div>
              </div>

              <div className="products-show__wrapper__main__info__buttons">
                <div>
                  <Button
                    variant={'default'}
                    onClick={() => {
                      PushProductCart({
                        product: cartProduct,
                        products: cartProducts,
                        dispatch: dispatch
                      })
                    }}>
                    <AiOutlineShopping size={25} />
                    <span>Add to Basket</span>
                  </Button>
                  <Button
                    variant={'outline'}
                    onClick={() => {
                      PushProductFavorite({
                        favourite_product: favoriteProduct,
                        favourite_products: favouriteProducts,
                        dispatch: dispatch
                      })
                    }}>
                    <Heart size={25} />
                    <span>Add to Favourites</span>
                  </Button>
                </div>

                <ShareProductWrapper />
              </div>

              <div className="products-show__wrapper__main__info__recovery">
                <GoPackageDependents size={27} />
                <span>Free online returns within 14 days</span>
              </div>

              <div className="products-show__wrapper__main__info__accord">
                <ProductShowAccordionWrapper />
              </div>
            </div>
          </div>

          <div className="products-show__wrapper__second">
            {reviews !== null ? (
              <ProductReviews
                product={product}
                reviews={reviews}
                currentTypeIndex={currentTypeIndex}
                finalRate={
                  reviews.reviews
                    .map((item) => item.overall_rating)
                    .reduce((a, b) => a + b, 0) / reviews.reviews.length
                }
              />
            ) : (
              <div className="skeleton__wrapper">
                <Skeleton className="skeleton" />
                <Skeleton className="skeleton" />
                <Skeleton className="skeleton" />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductShow
