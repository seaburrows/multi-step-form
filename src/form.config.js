import * as yup from "yup";

import { ThankYouPage, UserDetailsStep, SignUpOptionsStep } from "./pages";
import { USER, SIGN_UP_OPTIONS } from "./consts";
import { getPasswordRules } from "./utility/get-password-rules";

const passwordRules = getPasswordRules();

export const formConfig = [
  {
    name: USER,
    schema: yup.object().shape({
      name: yup.string().required("Please enter your name."),
      occupation: yup.string(),
      email: yup
        .string()
        .email("Please enter a valid email address.")
        .required("Please enter your email address."),
      password: yup
        .string()
        .matches(passwordRules.regex, "Password strength is too low.")
        .required("Please create a password."),
    }),
    label: "User",
    component: UserDetailsStep,
  },
  {
    name: SIGN_UP_OPTIONS,
    schema: yup.object().shape({
      productUpdates: yup.bool(),
      communication: yup.bool(),
    }),
    label: "Privacy",
    component: SignUpOptionsStep,
  },
  {
    name: "thanks",
    schema: null,
    label: "Done",
    submission: true,
    component: ThankYouPage,
  },
];
