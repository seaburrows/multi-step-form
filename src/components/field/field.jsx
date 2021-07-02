import React, { createContext, useContext } from "react";
import { useStyles, useLabelStyles, useErrorStyles } from "./field.styles";

const FieldContext = createContext({});

export const FieldProvider = ({ children, ...props }) => (
  <FieldContext.Provider value={props}>{children}</FieldContext.Provider>
);

export const useField = () => {
  return useContext(FieldContext);
};

export const FieldLabel = () => {
  const field = useField();
  const labelStyles = useLabelStyles({ hasError: field.hasError });

  return (
    <label htmlFor={field.id} css={labelStyles}>
      {field.label}
      {field.isRequired && " *"}
    </label>
  );
};

export const FieldErrors = () => {
  const field = useField();
  const errorStyles = useErrorStyles();

  if (!field.hasError) {
    return null;
  }

  return (
    <ul>
      {field.errors.map((err) => (
        <li key={err} css={errorStyles}>
          {err}
        </li>
      ))}
    </ul>
  );
};

export const FieldHint = () => {
  const field = useField();

  if (field.hint) {
    return <p>{field.hint}</p>;
  }

  return null;
};

export const Field = ({
  id: passedId,
  name,
  type = "text",
  getFieldErrors,
  onChange,
  ...props
}) => {
  const errors = getFieldErrors(name);
  const hasError = errors.length > 0;
  const styles = useStyles({ hasError });
  const id = passedId || `field-${name}`;

  return (
    <div>
      <FieldProvider {...props} {...{ id, errors, hasError }}>
        <FieldLabel />
        <input id={id} type={type} name={name} css={styles} {...{ onChange }} />
        <FieldHint />
        <FieldErrors />
      </FieldProvider>
    </div>
  );
};
