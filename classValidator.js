import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
    isString,
    minLength,
    max,
  } from 'class-validator';
  
  export class user {
    @isString()
    userName;

    @IsEmail()
    userEmail;
    
    @min(5)
    userName;
    userPassword;

    @max(15)
    userName;
    userPassword;

}
  