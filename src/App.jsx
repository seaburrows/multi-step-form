import React from "react";
import { Global } from "@emotion/react";
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
        label="Product"
        name="productUpdates"
        type="checkbox"
        {...inputEvents}
      />
      <Field
        label="Communications"
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
      <Field label="Password" name="password" isRequired {...inputEvents} />

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
      name: yup.string().required(),
      occupation: yup.string(),
      email: yup.string().email().required(),
      password: yup.string().matches(/aaa/).required(),
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
    label: "Thanks",
    submission: true,
    component: ThankYouPage,
  },
];

const App = () => {
  return (
    <div>
      <Global styles={globalStyles} />
      <MultiForm
        onSubmit={(values) => console.log(values)}
        formConfig={formConfig}
      />
    </div>
  );
};

export default App;
