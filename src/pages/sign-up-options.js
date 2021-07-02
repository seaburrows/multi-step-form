/** @jsxImportSource @emotion/react */
import { SIGN_UP_OPTIONS } from "../consts";
import { Field } from "../components/field";
import { FormStepActions, useFormStep } from "../components/multi-form";

export const SignUpOptionsStep = () => {
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
