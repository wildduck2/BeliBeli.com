import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/context/store'

import { Link, Skeleton } from '../../UI'
import { AsyncImage } from '../../Layouts'
import { ImgBannerProps } from './ImgBanner.types'

const ImgBanner: React.FC<ImgBannerProps> = ({ dataIndex, satatus }) => {
  const bannerData = useSelector((state: RootState) => state.data.bannersData)
  const status = useSelector((state: RootState) => state.data.satatus)

  return (
    dataIndex !== undefined && (
      <>
        <div className="img-banner">
          {satatus === 'succeeded' && status === 'succeeded' ? (
            <>
              <AsyncImage
                media="(min-width: 600px)"
                src={bannerData![dataIndex!].mobile_top_img}
                srcSet={bannerData![dataIndex!].top_img}
                width={275}
                height={387}
                className="img-banner__img"
                ariaLabel="banner img for new season"
              />

              <div className="img-banner__layout" aria-hidden="true"></div>

              <div className="img-banner__info">
                <h2>{bannerData![dataIndex!].title}</h2>
                <p>{bannerData![dataIndex!].subtitle}</p>

                <div>
                  {bannerData![dataIndex!].button?.map((btn, index) => {
                    return (
                      <Link
                        className="img-banner__button"
                        key={index}
                        href={btn}>
                        {btn}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </>
          ) : (
            <>
              <Skeleton className="img-banner__skeleton" aria-hidden="true" />
            </>
          )}
        </div>
      </>
    )
  )
}

ImgBanner.displayName = 'ImgBanner'

export default ImgBanner
