import { css } from "@emotion/react";

export const useStyles = ({ hasError, inputType } = {}) => {
  return {
    field: css`
      margin: var(--spacing-s) 0;
    `,
    input: css`
      line-height: 2rem;
      padding: 2px 6px;
      color: var(--color-text);
      border-radius: 4px;
      border: solid 1px ${hasError ? "var(--color-error)" : "currentColor"};

      &:not([type="checkbox"]) {
        width: 80%;
      }
    `,
    inputWrapper:
      inputType === "checkbox"
        ? css`
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
          `
        : "",
  };
};

export const useLabelStyles = ({ hasError, inputType } = {}) => css`
  display: block;
  padding: var(--spacing-s) 0;
  font-weight: 400;
  font-size: var(--font-m);

  ${hasError &&
  css`
    color: var(--color-error);
  `};

  ${inputType === "checkbox" &&
  css`
    padding: 0 0 var(--spacing-m) var(--spacing-s);
    font-size: var(--font-s);
    flex-basis: 100%;
  `};
`;

export const useErrorStyles = ({ hasError } = {}) => {
  return {
    list: css`
      padding: var(--spacing-s) 0 0;
      list-style: none;

      color: var(--color-error);
    `,
    item: css`
      & + & {
        padding-top: var(--spacing-s);
      }
    `,
  };
};

export const useHintStyles = () => css`
  margin: var(--spacing-s) 0 0;

  color: var(--color-information);
`;
