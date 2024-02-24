import { Product } from '@/context/Data/Data.types'

export interface SwiperTypes {
  DATA__NAME: Product[] | null
  FILTER__QUERY?: string
}

export interface CardInfoTypes {
  choosen?: boolean
  title: string
  discount?: string | null
  price?: string | null
}
