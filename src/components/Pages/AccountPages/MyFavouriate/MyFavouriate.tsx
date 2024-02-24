import React from 'react'
import { Button, SwiperCard } from '@/components/UI'
import { RootState } from '@/context'
import { AiOutlineShopping } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MyFavouriate = (): React.JSX.Element => {
  const route = useNavigate()
  const userData = useSelector((state: RootState) => state.user.userData)
  const currentSizeIndex = 0

  return (
    <div className="account__favourites">
      <h1>My Favourites</h1>
      <ul className="account__favourites__products">
        {userData?.favourite_products.map((product) => {
          return (
            <div
              key={product.id + Math.random()}
              className="account__favourites__products__product">
              <SwiperCard favouriteItem={product} width={300} height={500} />

              <div className="account__favourites__products__product__buttons">
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

                    // PushProductCart({
                    //   product: cartProduct,
                    //   products: cartProducts,
                    //   dispatch: dispatch
                    // })
                  }}>
                  <AiOutlineShopping size={25} />
                  <span>Add to Basket</span>
                </Button>
                <Button
                  variant={'destructive'}
                  // onClick={() => {
                  //   RemoveProductFavorite({
                  //     product: product,
                  //     dispatch
                  //   })
                  // }}
                >
                  <MdDeleteOutline size={27} />
                  <span>Remove from favorites</span>
                </Button>
              </div>
            </div>
          )
        })}
      </ul>
      <Button
        variant="default"
        className="shop"
        onClick={() => {
          window.scrollTo(0, 0)
          route('/')
        }}>
        Go shopping
      </Button>
    </div>
  )
}

export default MyFavouriate
