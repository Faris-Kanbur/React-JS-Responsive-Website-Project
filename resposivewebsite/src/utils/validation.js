import { string } from "yup";

export const firstname = string().required("The name is required");
export const surname = string().required("The surname is required");
export const email = string("Enter your email")
  .email("Enter a valid email")
  .required("Email is required");
export const level = string().required("Required").nullable()

