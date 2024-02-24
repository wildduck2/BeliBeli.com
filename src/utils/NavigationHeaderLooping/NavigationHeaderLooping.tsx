import React from 'react'
import { Link } from 'react-router-dom'
import { headerNavigationDataTypes } from '../NavigationHandlerAvtive'

const NavigationHeaderLooping = ({
  headerNavigationData
}: headerNavigationDataTypes) => {
  return (
    <ul>
      {headerNavigationData?.map((item, index) => {
        return (
          <li key={index}>
            {item.map((child) => {
              return child.map((item, index) => {
                return (
                  <ul key={index}>
                    {item.map((item, index) => {
                      return (
                        <li key={index}>
                          {index === 0 ? (
                            <h4>{item}</h4>
                          ) : (
                            <Link to={item}>{item}</Link>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                )
              })
            })}
          </li>
        )
      })}
    </ul>
  )
}

export default NavigationHeaderLooping
