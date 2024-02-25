import { Filter, Swiper } from '@/components/Layouts'
import { RootState } from '@/context/store'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const SwiperSectionWrapper = () => {
  const [FILTER__QUERY, SET__FILTER__QUERY] = useState('Women')
  const products = useSelector((state: RootState) => state.data.products)
  console.log(products)

  return (
    <div>
      <div className="trending__section__header">
        <h2>Trending Now</h2>
        <div className="trending__section__header__filter">
          <Filter setFilterQuery={SET__FILTER__QUERY} />
        </div>
      </div>
      <Swiper FILTER__QUERY={FILTER__QUERY} DATA__NAME={products} />
    </div>
  )
}

export default SwiperSectionWrapper
