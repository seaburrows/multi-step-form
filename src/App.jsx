import React from "react";
import { css, Global } from "@emotion/react";
import { globalStyles } from "./global.styles.js";
import * as yup from "yup";

import {
  FormStepActions,
  MultiForm,
  useFormStep,
} from "./components/multi-form";
import { Field } from "./components/field";

const USER = "user";
const SIGN_UP_OPTIONS = "sign-up-options";

const SignUpOptionsStep = () => {
  const { setFieldValue, actions, getFieldErrors } =
    useFormStep(SIGN_UP_OPTIONS);

  const inputEvents = {
    onChange: setFieldValue,
    getFieldErrors,
  };

  return (
    <>
      <Field
        label="Receive updates about Tray.io product by email"
        name="productUpdates"
        type="checkbox"
        {...inputEvents}
      />
      <Field
        label="Receive communication by email for other products created by the Tray.io team"
        name="communications"
        type="checkbox"
        {...inputEvents}
      />

      <FormStepActions {...actions} />
    </>
  );
};

const UserDetailsStep = () => {
  const { setFieldValue, actions, getFieldErrors } = useFormStep(USER);

  const inputEvents = {
    onChange: setFieldValue,
    getFieldErrors,
  };

  return (
    <>
      <Field label="User name" name="name" isRequired {...inputEvents} />
      <Field label="Job title" name="occupation" {...inputEvents} />
      <Field label="Email address" name="email" isRequired {...inputEvents} />
      <Field
        label="Password"
        name="password"
        isRequired
        hint={password.hintText}
        {...inputEvents}
      />

      <FormStepActions {...actions} />
    </>
  );
};

const ThankYouPage = () => {
  return <p>Nice!</p>;
};

const password = {
  hintText:
    "Please ensure your password has at least 9 characters and includes: one uppercase letter, one lowercase letter, and one number.",
  regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{9,}$/,
};

const formConfig = [
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
        .matches(password.regex, "Password strength is too low.")
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
    name: "THANKS",
    schema: null,
    label: "Done",
    submission: true,
    component: ThankYouPage,
  },
];

const appStyles = css`
  max-width: 540px;
  margin: var(--spacing-l) auto;
  padding: var(--spacing-l);
  background-color: var(--color-bg);
  border-radius: 6px;
`;

const App = () => {
  return (
    <div css={appStyles}>
      <Global styles={globalStyles} />
      <MultiForm
        onSubmit={(values) => console.log(values)}
        formConfig={formConfig}
      />
    </div>
  );
};

export default App;
