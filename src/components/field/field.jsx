/** @jsxImportSource @emotion/react */
import { createContext, useContext } from "react";
import { Input } from "../input";
import {
  useStyles,
  useLabelStyles,
  useErrorStyles,
  useHintStyles,
} from "./field.styles";

// Use context to avoid prop drilling
const FieldContext = createContext({});

export const FieldProvider = ({ children, ...props }) => (
  <FieldContext.Provider value={props}>{children}</FieldContext.Provider>
);

export const useField = () => {
  return useContext(FieldContext);
};

// Label component 
export const FieldLabel = () => {
  const field = useField();
  const labelStyles = useLabelStyles({
    hasError: field.hasError,
    inputType: field.type,
  });

  return (
    <label htmlFor={field.id} css={labelStyles}>
      {field.label}
      {field.isRequired && " *"}
    </label>
  );
};

export const FieldErrors = () => {
  const field = useField();
  const styles = useErrorStyles();

  if (!field.hasError) {
    return null;
  }

  return (
    <ul css={styles.list}>
      {field.errors.map((err) => (
        <li key={err} css={styles.item}>
          {err}
        </li>
      ))}
    </ul>
  );
};

export const FieldHint = () => {
  const field = useField();
  const styles = useHintStyles();

  if (field.hint) {
    return <p css={styles}>{field.hint}</p>;
  }

  return null;
};

export const FieldInput = (props) => {
  const field = useField();
  const inputProps = {
    id: field.id,
    name: field.name,
    type: field.type,
    onChange: field.onChange,
    onBlur: field.onBlur,
  };

  return <Input {...inputProps} {...props} />;
};

export const Field = ({
  id: passedId,
  name,
  type = "text",
  getFieldErrors,
  ...props
}) => {
  const errors = getFieldErrors(name);
  const hasError = errors.length > 0;
  const styles = useStyles({ hasError, inputType: type });
  const id = passedId || `field-${name}`; // ensure there is an id to link label and input

  return (
    <div css={styles.field}>
      <FieldProvider {...props} {...{ id, name, errors, hasError, type }}>
        <div css={styles.inputWrapper}>
          <FieldLabel />
          <FieldInput css={styles.input} />
        </div>
        <FieldHint />
        <FieldErrors />
      </FieldProvider>
    </div>
  );
};
