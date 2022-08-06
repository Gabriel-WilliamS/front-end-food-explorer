import * as yup from "yup";

export const login = yup.object().shape({
  name: yup.string().trim().lowercase().required(),
  email: yup.string().trim().lowercase().email().required(),
  password: yup.string().trim().min(6).required()
});
