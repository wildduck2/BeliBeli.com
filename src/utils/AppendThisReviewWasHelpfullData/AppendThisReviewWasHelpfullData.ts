import { ReviewCardProps } from '@/components/Layouts/ReviewCard/ReviewCard.types'
import { Product_review, review } from '@/context/Data/Data.types'
import { supabase } from '@/supabase/supabase'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { toast } from 'sonner'
import { appendThisReviewWasHelpfullDataProps } from './AppendThisReviewWasHelpfullData.types'

export const appendThisReviewWasHelpfullData = async ({
  index,
  value,
  state,
  reviewValue,
  setReviewValue,
  setReviewHelpfull
}: appendThisReviewWasHelpfullDataProps) => {
  try {
    const { data, error } = await supabase.auth.getUser()

    if (error) {
      toast.error('You should login first')
      return
    }

    const { data: reviews, error: products_reviews_error } = (await supabase
      .from('products_reviews')
      .select('*')
      .eq('id', state.review_id)) as PostgrestSingleResponse<Product_review[]>

    if (products_reviews_error) {
      toast.error('There is an error to get this review')
    }

    const product_reviews = reviews![0].reviews as review[]
    const user_id = data.user?.id
    const updateObj = {
      user_id: user_id,
      value: value
    }

    product_reviews[index].this_review_was_helpufll.unshift(updateObj)

    const { data: updatedReviews, error: updateError } = (await supabase
      .from('products_reviews')
      .update({ reviews: product_reviews })
      .eq('id', state.review_id)) as PostgrestSingleResponse<ReviewCardProps[]>

    if (updateError) {
      toast.error('There is an error to update this review')
    }
    toast.success('Thank you for your feedback')

    setReviewValue([{ user_id: user_id, value: value }, ...reviewValue])
    setReviewHelpfull(value)
  } catch (error) {
    toast.error('Something went wrong')
    throw new Error(error as string)
  }
}
