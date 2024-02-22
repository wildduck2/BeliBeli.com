import React, { useEffect } from 'react'
import { useGetReviewsProps } from './useGetReviews.types'
import { supabase } from '@/supabase/supabase'
import { Product_review } from '@/context/Data.types'

const useGetReviews = ({ reviews_id }: useGetReviewsProps) => {
  const [reviews, setReviews] = React.useState<Product_review | null>(null)
  const [error, setError] = React.useState<string>('')

  useEffect(() => {
    const fetchReviews = async () => {
      const { data: review, error } = await supabase
        .from('products_reviews')
        .select('*')
        .eq('id', reviews_id)

      if (!error) {
        setReviews(review[0])
      } else {
        setError(error.message)
      }
    }
    fetchReviews()
  }, [reviews_id])

  return [reviews, error] as const
}

export default useGetReviews
