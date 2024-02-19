import * as Yup from "yup";

export const AddressValidator = Yup.object({
  emailId: Yup.string().email("Invalid email address").required("Required"),
  mobileNumber: Yup.string()
    .required("Required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  address1: Yup.string().required("Required"),
  address2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string(),
  zip: Yup.string()
    .required("Required")
    .matches(/^[0-9]+$/, "Must be only digits"),
  country: Yup.string().required("Required"),
  saveAddress: Yup.boolean(),
});
