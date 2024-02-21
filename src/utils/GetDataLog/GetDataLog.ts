import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

interface GetDataLogTyps {
  fullName?: string;
  email: string;
  password: string;
}

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
  );
};

export default GetDataLog;
