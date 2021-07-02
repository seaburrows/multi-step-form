import React from "react";
import { useStyles, useLabelStyles, useErrorStyles } from "./field.styles";

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
  const labelStyles = useLabelStyles({ hasError });
  const errorStyles = useErrorStyles();
  const errors = getFieldErrors(name);
  const fieldId = `field-${name}`;

  return (
    <div>
      <label htmlFor={fieldId} css={labelStyles}>
        {label}
        {isRequired && " *"}
      </label>
      <input
        id={fieldId}
        type={type}
        name={name}
        css={styles}
        {...inputEvents}
      />
      {hint && <p>{hint}</p>}
      {errors &&
        errors.map((err) => (
          <p key={err} css={errorStyles}>
            {err}
          </p>
        ))}
    </div>
  );
};
