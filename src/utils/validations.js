import * as yup from "yup";

var acceptedCreditCards = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard:
    /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
  amex: /^3[47][0-9]{13}$/,
  discover:
    /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
  diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/
};

export const login = yup.object().shape({
  name: yup.string().trim().lowercase().required(),
  email: yup.string().trim().lowercase().email().required(),
  password: yup.string().trim().min(6).required()
});

export const creditCard = yup.object().shape({
  numberCard: yup.string().min(16).max(16).trim().required(),
  validate: yup.string().min(4).max(4).required(),
  cvc: yup.string().min(4).max(4).required()
});

export const productFields = yup.object().shape({
  file: yup.mixed().required("File is required"),
  name: yup.string().trim().required(),
  // ingredient: yup.string().trim().required(),
  price: yup.number().required(),
  category: yup.number().typeError("Escolha uma categoria!").required(),
  description: yup.string().trim().required()
});

export const categoryFields = yup.object().shape({
  name: yup.string().required()
});
