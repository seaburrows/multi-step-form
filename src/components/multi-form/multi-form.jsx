import React, { createContext, useContext, useState } from "react";
import { useStep } from "../../useStep";
import { Debug } from "../debug";
import { StepDisplay } from "../step-display";
import {
  getFormSchema,
  getStepComponents,
  getStepLabels,
  getSubmittedPage,
} from "./multi-form.utils";
import { useButtonStyle } from "./multi-form.styles";

export const FormContext = createContext({});

export const useFormStep = (name) => {
  const form = useContext(FormContext);

  const stepSchema = form.schema[name];
  const stepValues = form.values[name];

  const validateFormStep = async () => {
    const stepErrors = await stepSchema
      .validate(stepValues, { abortEarly: false })
      .then(() => ({})) // no errors
      .catch((errors) => {
        return errors.inner.reduce(
          (acc, cur) => ({ ...acc, [cur.path]: cur.errors }),
          {}
        );
      });

    form.storeErrors({ ...form.errors, [name]: stepErrors });

    // At least one error exists - prevent submission
    if (Object.values(stepErrors).some(Boolean)) {
      return false;
    }

    return true;
  };

  const setFieldValue = ({ target }) => {
    const { name: fieldName, value, checked, type: targetType } = target;

    const fieldValue = targetType === "checkbox" ? checked : value;

    form.storeValues({
      ...form.values,
      [name]: {
        ...stepValues,
        [fieldName]: fieldValue,
      },
    });
  };

  return {
    actions: {
      ...form.actions,
      checkValidity: validateFormStep,
    },
    schema: stepSchema,
    values: stepValues,
    getFieldErrors: (fieldName) => form.errors[name]?.[fieldName] || [],
    setFieldValue,
  };
};

export const FormStepActions = ({ prev, next, submit, checkValidity }) => {
  const style = useButtonStyle();

  const submitStep = async () => {
    const isValid = await checkValidity();

    if (isValid) {
      if (typeof next === "function") {
        next();
      } else {
        submit();
      }
    }
  };

  return (
    <div>
      {/* TODO: Enable Previous button - BLOCKER: initial step state */}
      {/* {typeof prev === "function" && (
        <button type="button" onClick={prev}>
          Prev
        </button>
      )} */}
      <button type="button" css={style} onClick={submitStep}>
        Save
      </button>
    </div>
  );
};

export const MultiForm = ({ formConfig, onSubmit }) => {
  const schema = getFormSchema(formConfig);
  const stepTitles = getStepLabels(formConfig);
  const SubmittedPage = getSubmittedPage(formConfig);
  const formSteps = getStepComponents(formConfig);

  const {
    step: StepComponent,
    actions: stepActions,
    stepIndex,
  } = useStep({ initialIndex: 0, steps: formSteps });

  const [values, storeValues] = useState({});
  const [errors, storeErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const actions = {
    ...stepActions,
    submit: () => {
      onSubmit(values);
      setSubmitted(true);
    },
  };

  const stepDisplayIndex = submitted ? formSteps.length : stepIndex;

  return (
    <>
      <StepDisplay stepIndex={stepDisplayIndex} stepTitles={stepTitles} />

      {submitted ? (
        <SubmittedPage />
      ) : (
        <FormContext.Provider
          value={{
            actions,
            errors,
            schema,
            values,
            storeValues,
            storeErrors,
          }}
        >
          <StepComponent />

          <Debug data={{ formValues: values, formErrors: errors }} />
        </FormContext.Provider>
      )}
    </>
  );
};
