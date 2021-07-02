import { css } from "@emotion/react";

export const useStyles = ({ hasError } = {}) => {
  return css``;
};

export const useLabelStyles = ({ hasError } = {}) => {
  return css`
    ${hasError &&
    css`
      color: var(--color-error);
    `};
  `;
};

export const useErrorStyles = ({ hasError } = {}) => {
  return css`
    color: var(--color-error);
  `;
};
