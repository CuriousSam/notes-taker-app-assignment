import * as yup from 'yup';

export const userRegisterSchema = yup.object({
  name: yup.string().min(3).required().label('Name'),
  email: yup
    .string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter valid email'
    )
    .required()
    .label('E-mail'),
  password: yup.string().min(6).required().label('Password'),
});

export type UserRegisterData = yup.InferType<typeof userRegisterSchema>;

export const userLoginSchema = yup.object({
  email: yup
    .string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter valid email'
    )
    .required()
    .label('E-mail'),
  password: yup.string().min(6).required().label('Password'),
});
