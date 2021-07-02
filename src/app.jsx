/** @jsxImportSource @emotion/react */
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
import { getPasswordRules } from "./utility/get-password-rules.js";

const passwordRules = getPasswordRules();

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
        type="password"
        isRequired
        hint={passwordRules.hintText}
        {...inputEvents}
      />

      <FormStepActions {...actions} />
    </>
  );
};

const ThankYouPage = () => {
  return <p>Nice!</p>;
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

// Print the values in a flattened object
// WARN: this is not future-proof
const reduceValuesToTable = (values) =>
  Object.values(values).reduce(
    (acc, step) => ({
      ...acc,
      ...Object.entries(step).reduce(
        (acc2, [key, value]) => ({
          ...acc2,
          [key]: value,
        }),
        {}
      ),
    }),
    {}
  );

const App = () => (
  <div css={appStyles}>
    <Global styles={globalStyles} />

    <MultiForm
      formConfig={formConfig}
      onSubmit={(values) => {
        console.table(reduceValuesToTable(values));
      }}
    />
  </div>
);

export default App;
