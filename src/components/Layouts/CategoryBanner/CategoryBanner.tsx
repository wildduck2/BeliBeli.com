import React from 'react'

import { Link, Skeleton } from '../../UI'
import { AsyncImage } from 'loadable-image'
import { useSelector } from 'react-redux'
import { RootState } from '@/context/store'

interface CategoryBannerTypes {
  dataIndex: number
  satatus: 'succeeded' | 'loading' | 'failed'
}

const CategoryBanner: React.FC<CategoryBannerTypes> = ({
  dataIndex,
  satatus
}) => {
  const categoriesData = useSelector(
    (state: RootState) => state.data.categoriesData
  )

  return (
    <div className="category-banner">
      <h1>Categories you might like</h1>

      {/* cagegories mapping */}
      <div className="category-banner__wrapper">
        {satatus === 'succeeded' ? (
          categoriesData![dataIndex].category__img__high.map((item, index) => {
            return (
              <Link key={index} className="category-banner__bit">
                <picture>
                  <AsyncImage
                    src={categoriesData![dataIndex].category__img__high[index]}
                    style={{ width: 65, height: 65 }}
                    // sources={[{ type: "image/png", srcSet: data.category__img__low[index]}]}
                    loader={<div className="skeleton r-full" />}
                    error={<div className="skeleton r-full" />}
                  />
                </picture>
                <span>{categoriesData![dataIndex].category[index]}</span>
                <h2>{categoriesData![dataIndex].name[index]}</h2>
              </Link>
            )
          })
        ) : (
          <div className="category__skeleton">
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <div key={index}>
                  <Skeleton className="skeleton" />
                  <Skeleton className="skeleton sm" />
                  <Skeleton className="skeleton sm" />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryBanner
