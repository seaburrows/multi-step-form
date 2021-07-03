/** @jsxImportSource @emotion/react */
import { createContext, useContext, useState } from "react";
import { useStep } from "../../utility/use-step";
import { Debug } from "../debug";
import { StepDisplay } from "../step-display";
import {
  getFormSchema,
  getStepComponents,
  getStepLabels,
  getSubmittedPage,
} from "./multi-form.utils";
import { useActionsStyle, useButtonStyle } from "./multi-form.styles";

// Use context to save on prop drilling as this DX is preferred.
export const FormContext = createContext({});

export const useFormStep = (name) => {
  const form = useContext(FormContext);

  // extract the step information
  const stepSchema = form.schema[name];
  const stepValues = form.values[name];

  // use yup validate and return any error messages
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

    // it is valid \o/
    return true;
  };

  // Save the field value
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
  const containerStyle = useActionsStyle();
  const buttonStyle = useButtonStyle();

  // Step submission
  const submitStep = async () => {
    const isValid = await checkValidity();
    
    if (isValid) {
      // if the current step is not the last step, `next` will be a function
      if (typeof next === "function") {
        next();
      } else {
        submit();
      }
    }
  };

  return (
    <div css={containerStyle}>
      {/* TODO: Enable Previous button - BLOCKER: initial step state */}
      {/* {typeof prev === "function" && (
        <button type="button" css={buttonStyle} onClick={prev}>
          Prev
        </button>
      )} */}
      <button type="button" css={buttonStyle} onClick={submitStep}>
        Save
      </button>
    </div>
  );
};

export const MultiForm = ({ formConfig, onSubmit }) => {
  // These utility functions simply extract data from the configuration.
  // We could combine these and have something like:
  //    `const { schema, stepTitles } = useSchema(formConfig)`
  const schema = getFormSchema(formConfig);
  const stepTitles = getStepLabels(formConfig);
  const SubmittedPage = getSubmittedPage(formConfig);
  const formSteps = getStepComponents(formConfig);

  // The step hook controls the navigation and the step state,
  // it is not tied to the form state itself and could be reused.
  const {
    step: StepComponent,
    actions: stepActions,
    stepIndex,
  } = useStep({ initialIndex: 0, steps: formSteps });

  const [values, storeValues] = useState({});
  const [errors, storeErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Merge the submission event into the actions returned from `useStep()`
  const actions = {
    ...stepActions,
    submit: () => {
      onSubmit(values);
      setSubmitted(true);
    },
  };

  // Quick hack - submitted will always be last
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
