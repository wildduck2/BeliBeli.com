import { ToggleProdutFavoriteTypes } from '.'
import { PushProductFavorite, RemoveProductFavorite } from '..'

const ToggleProdutFavorite = ({
  e,
  dispatch,
  favourite_product,
  favourite_products
}: ToggleProdutFavoriteTypes): void => {
  if (
    favourite_products.some(
      (item) =>
        item.product_type.art_no === favourite_product.product_type.art_no
    )
  ) {
    RemoveProductFavorite({
      product: favourite_product,
      dispatch: dispatch
    })
  } else {
    PushProductFavorite({
      favourite_product: favourite_product,
      favourite_products: favourite_products,
      dispatch: dispatch
    })
    e.currentTarget.classList.add('active')
  }
}

export default ToggleProdutFavorite
