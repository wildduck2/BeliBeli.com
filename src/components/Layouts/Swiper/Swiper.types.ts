import { Product, styled_by_you } from '@/context/Data/Data.types'

export interface SwiperTypes {
  DATA__NAME: Product[] | null
  FILTER__QUERY?: string
}

export interface SmallSwiperTypes {
  DATA__NAME: styled_by_you[] | null
}

export interface CardInfoTypes {
  choosen?: boolean
  title: string
  discount?: string | null
  price?: string | null
}
