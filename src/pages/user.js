/** @jsxImportSource @emotion/react */
import { USER } from "../consts";
import { Field } from "../components/field";

import { getPasswordRules } from "../utility/get-password-rules";
import { FormStepActions, useFormStep } from "../components/multi-form";

const passwordRules = getPasswordRules();

export const UserDetailsStep = () => {
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
