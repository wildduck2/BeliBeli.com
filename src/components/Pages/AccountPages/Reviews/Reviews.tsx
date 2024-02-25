import { ReviewCard } from '@/components/Layouts'
import { RootState } from '@/context'
import React from 'react'
import { useSelector } from 'react-redux'

const Reviews = (): React.JSX.Element => {
  const userData = useSelector((state: RootState) => state.user.userData)
  console.log(userData?.product_reviews)

  return (
    <div className="account__reviews">
      <h1>Reviews</h1>

      <ul className="products-show__wrapper__second__items ">
        {userData?.product_reviews ? (
          userData?.product_reviews?.map((review, index) => (
            <ReviewCard key={review.id} index={index} review={review} />
          ))
        ) : (
          <p>No reviews yet</p>
        )}
      </ul>
    </div>
  )
}

export default Reviews
