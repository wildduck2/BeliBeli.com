import React from 'react'
import { ImgBanner } from '../../UI'
import { NavigationHeaderLooping } from '../../../utils'
import { ColorfulBanner } from '../../Layouts'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/context/store'
import { CategoryDataType } from './CategoryPage.types'
import { categoryDiscriptionData } from '@/constants'

const CategoryPage = () => {
  const id = useParams()

  const location = useLocation()
  const state = location.state as CategoryDataType

  const status = useSelector((state: RootState) => state.data.satatus)

  return (
    <>
      <main className="category-page">
        <span>{state.routeText}</span>

        <div className="category-page__wrapper">
          <div className="category-page__wrapper__sidebar">
            {
              <NavigationHeaderLooping
                headerNavigationData={state?.navigationLink}
                satatus={status}
              />
            }
          </div>
          <div className="category-page__wrapper__content">
            <h1>{state?.pageTile}</h1>

            {/* Hero Section */}
            <section className="category-page__wrapper__content__hero">
              {/* RedBanner Section */}
              <ColorfulBanner
                title={state?.redBannerWomen.title}
                description={state?.redBannerWomen.description}
                supTitle={state?.redBannerWomen.subtitle}
                buttonText={state?.redBannerWomen.Links}
                color={state?.redBannerWomen.ColorfulBanner}
                satatus={status}
              />

              <ImgBanner dataIndex={state?.bannerIndexes[0]} satatus={status} />
              <ImgBanner dataIndex={state?.bannerIndexes[1]} satatus={status} />

              {/* BlackBanner Section */}
              <ColorfulBanner
                title={state?.blackBannerWomen.title}
                description={state?.blackBannerWomen.description}
                supTitle={state?.blackBannerWomen.subtitle}
                buttonText={state?.blackBannerWomen.Links}
                color={state?.blackBannerWomen.ColorfulBanner}
                satatus={status}
              />
            </section>
            <div className="category-page__wrapper__sidebar mobile__sidebar">
              {
                <NavigationHeaderLooping
                  headerNavigationData={state?.navigationLink}
                  satatus={status}
                />
              }
            </div>
            <section className="category-page__wrapper__content__disc">
              {status === 'succeeded' ? (
                Object.entries(
                  Object.entries(categoryDiscriptionData).filter(
                    (item) => item[0] === id.id?.toLowerCase()
                  )[0][1]
                ).map(([key, value]) => (
                  <div key={key}>
                    {value.title}
                    {value.disc.map((item) => item)}
                  </div>
                ))
              ) : (
                <h1>laoding...</h1>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default CategoryPage
