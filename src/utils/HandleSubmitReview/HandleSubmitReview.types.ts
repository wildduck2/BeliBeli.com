import { Product_review } from '@/context/Data/Data.types'
import { UUID } from 'crypto'

export interface handleSubmitProps {
  review_id: UUID
  rate: number
  reviewTitle: string
  reviewDiscription: string
  nickname: string
  email: string
  userId: string
  productRecommended: boolean
  trueToSize: 'small' | 'spot on' | 'large'
  fit: 'tight' | 'spot on' | 'large'
  lenght: 'small' | 'spot on' | 'large'
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  dialogClose: React.RefObject<HTMLButtonElement>
  setAllReviews: React.Dispatch<React.SetStateAction<Product_review>>
}
