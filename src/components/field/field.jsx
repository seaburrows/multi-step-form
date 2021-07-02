import React from "react";
import { useStyles, useLabelStyles, useErrorStyles } from "./field.styles";

export const FieldLabel = ({ label, isRequired, fieldId, hasError }) => {
  const labelStyles = useLabelStyles({ hasError });

  return (
    <label htmlFor={fieldId} css={labelStyles}>
      {label}
      {isRequired && " *"}
    </label>
  );
};

export const FieldErrors = ({ errors }) => {
  const errorStyles = useErrorStyles();

  return (
    <ul>
      {errors.map((err) => (
        <li key={err} css={errorStyles}>
          {err}
        </li>
      ))}
    </ul>
  );
};

export const FieldHint = ({ hintText }) => {
  return <p>{hintText}</p>;
};

export const Field = ({
  hasError,
  isRequired,
  name,
  label,
  type = "text",
  hint,
  getFieldErrors,
  ...inputEvents
}) => {
  const styles = useStyles({ hasError });
  const errors = getFieldErrors(name);
  const fieldId = `field-${name}`;

  return (
    <div>
      <FieldLabel {...{ label, isRequired, name, fieldId, hasError }} />
      <input
        id={fieldId}
        type={type}
        name={name}
        css={styles}
        {...inputEvents}
      />
      {hint && <FieldHint hintText={hint} />}
      {errors && <FieldErrors errors={errors} />}
    </div>
  );
};
