import React from 'react'
import { ReviewCardProps } from './ReviewCard.types'
import { Box, Rating } from '@mui/material'
import { Star } from 'lucide-react'
import { Button, Label } from '@/components/UI'
import { useLocation } from 'react-router-dom'
import { Product, ReviewWasHelpfull } from '@/context/Data/Data.types'
import { appendThisReviewWasHelpfullData } from '@/utils'
import { RootState } from '@/context/store'
import { useSelector } from 'react-redux'
import { UUID } from 'crypto'

const ReviewCard: React.FC<ReviewCardProps> = ({ index, review }) => {
  const time = review.created_at
  const date = new Date(time)
  const formatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  const created_at = formatter.format(date)

  const reviewTrue = review.this_review_was_helpufll?.filter(
    (item: ReviewWasHelpfull) => item.value === true
  )

  const reviewFalse = review.this_review_was_helpufll?.filter(
    (item: ReviewWasHelpfull) => item.value === false
  )
  const userSession = useSelector((state: RootState) => state.user.userSession)

  const [reviewtrue, setReviewTrue] =
    React.useState<Array<ReviewWasHelpfull>>(reviewTrue)
  const [reviewfalse, setReviewFalse] =
    React.useState<Array<ReviewWasHelpfull>>(reviewFalse)
  const [reviewHelpfull, setReviewHelpfull] = React.useState<boolean | null>(
    null
  )

  const REVIEW_USER_IDS = review.this_review_was_helpufll?.map(
    (item: ReviewWasHelpfull) => item.user_id
  )

  const THIS_USER_ALLOWED_TO_HELP_THIS_REVIEW =
    review.this_review_was_helpufll?.filter(
      (item) => item.user_id === userSession?.id
    )
  const { state } = useLocation()
  const product: Product = state

  return (
    <li>
      <div>
        <h3>{review.nickname}</h3>
        <div>
          <span>True to Size: {review.true_to_size}</span>
          <span>Fit: {review.fit}</span>
          <span>Length: {review.lenght}</span>
        </div>
      </div>

      <div>
        <div>
          <Box component="fieldset" borderColor="transparent">
            <Rating
              name="customized-empty"
              defaultValue={review.overall_rating}
              precision={0.5}
              emptyIcon={<Star />}
              readOnly
            />
          </Box>
          <span className="rating">({`${review.overall_rating}`})</span>
        </div>

        <div>
          <h4>{review.review_title}</h4>
          <span>{created_at}</span>
          <p>{review.review_discription}</p>
        </div>
        <div>
          <Label htmlFor="rating">Was this review helpful?</Label>
          <div>
            <Button
              variant={'secondary'}
              onClick={() => {
                appendThisReviewWasHelpfullData({
                  index: index,
                  value: true,
                  state: product,
                  reviewValue: reviewTrue,
                  setReviewValue: setReviewTrue,
                  setReviewHelpfull: setReviewHelpfull
                })
              }}
              className={`${
                THIS_USER_ALLOWED_TO_HELP_THIS_REVIEW &&
                THIS_USER_ALLOWED_TO_HELP_THIS_REVIEW[0]?.value === true
                  ? 'active-green'
                  : reviewHelpfull === true
                    ? 'active-green'
                    : ''
              }`}
              disabled={
                REVIEW_USER_IDS?.includes(userSession!.id) ||
                reviewHelpfull !== null
              }>
              <span>Yes</span>
              <sub>({reviewtrue?.length})</sub>
            </Button>
            <Button
              variant={'secondary'}
              onClick={() => {
                appendThisReviewWasHelpfullData({
                  index: index,
                  value: false,
                  state: product,
                  reviewValue: reviewFalse,
                  setReviewValue: setReviewFalse,
                  setReviewHelpfull: setReviewHelpfull
                })
              }}
              className={`${
                THIS_USER_ALLOWED_TO_HELP_THIS_REVIEW &&
                THIS_USER_ALLOWED_TO_HELP_THIS_REVIEW[0]?.value === false
                  ? 'active-red'
                  : reviewHelpfull === false
                    ? 'active-red'
                    : ''
              }`}
              disabled={
                REVIEW_USER_IDS?.includes(userSession!.id as UUID) ||
                reviewHelpfull !== null
              }>
              <span>No</span>
              <sub>({reviewfalse?.length})</sub>
            </Button>
            <Button variant={'secondary'}>Report</Button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ReviewCard
