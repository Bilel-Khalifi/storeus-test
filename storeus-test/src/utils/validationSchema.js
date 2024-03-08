// ../../utils/validationSchema.js
import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\+?[0-9]+$/, "Phone number can only contain numbers and the + symbol.")
    .required('Phone number is required'),
});
