import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { GetDataLogTyps } from './GetDataLog.types'

// eslint-disable-next-line no-undef
const GetDataLog = ({ fullName, email, password }: GetDataLogTyps) => {
  return console.log(
    ` 
      id : ${nanoid()}
      fullName : ${fullName},
      email : ${email},
      passowrd : ${password}
      timeCreated : ${
        new Date().toDateString().split(' ')[0]
      } ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} 
    `
  )
}

export default GetDataLog
