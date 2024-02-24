import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, SwiperCard } from '@/components/UI'
import { RootState } from '@/context'
import { PushProductCart, RemoveProductFavorite } from '@/utils'
import { AiOutlineShopping } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'

const WishList = () => {
  const favouriteProducts = useSelector(
    (state: RootState) => state.util.favouriteProducts
  )
  const cartProducts = useSelector(
    (state: RootState) => state.util.cartProducts
  )
  const dispatch = useDispatch()
  const currentSizeIndex = 0

  return (
    <section className="wishlist">
      <h1>my favourites</h1>

      {favouriteProducts.length > 0 ? (
        <div className="wishlist__products">
          {favouriteProducts.map((product) => {
            return (
              <div
                key={product.id + Math.random()}
                className="wishlist__products__product">
                <SwiperCard favouriteItem={product} width={405} height={610} />

                <div className="wishlist__products__product__buttons">
                  <Button
                    variant={'default'}
                    onClick={() => {
                      const cartProduct = {
                        user_id: product.user_id,
                        id: product.id,
                        name: product.title,
                        price: parseInt(
                          product.product_type.sizes[currentSizeIndex].price
                        ),
                        discount: parseInt(
                          product.product_type.sizes[currentSizeIndex].discount!
                        ),
                        img: product.product_type.top_imgs,
                        art_no: product.product_type.art_no,
                        color: product.product_type.name,
                        size: product.product_type.sizes[currentSizeIndex].size,
                        quantity: 1
                      }

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
                    variant={'destructive'}
                    onClick={() => {
                      RemoveProductFavorite({
                        product: product,
                        dispatch
                      })
                    }}>
                    <MdDeleteOutline size={27} />
                    <span>Remove from favorites</span>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div>
          <p>Your favourites is empty.</p>
          <Button variant="default">Go shopping</Button>
        </div>
      )}
    </section>
  )
}

export default WishList
