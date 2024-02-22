import { ReviewCardProps } from '@/components/Layouts/ReviewCard/ReviewCard.types'
import { Product_review, review } from '@/context/Data.types'
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

    if (!error) {
      const { data: reviews, error } = (await supabase
        .from('products_reviews')
        .select('*')
        .eq('id', state.review_id)) as PostgrestSingleResponse<Product_review[]>

      if (!error) {
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
          .eq('id', state.review_id)) as PostgrestSingleResponse<
          ReviewCardProps[]
        >

        if (!updateError) {
          toast.success('Thank you for your feedback')
          console.log('updatedReviews', updatedReviews)

          setReviewValue([{ user_id: user_id, value: value }, ...reviewValue])
          setReviewHelpfull(value)
        } else {
          toast.error('There is an error to update this review')
        }
      } else {
        toast.error('There is an error to get this review')
      }
    } else {
      toast.error('You should login first')
    }
  } catch (error) {
    toast.error('Something went wrong')
    throw new Error(error as string)
  }
}
