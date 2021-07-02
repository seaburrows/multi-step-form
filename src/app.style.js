import { css } from "@emotion/react";

export const useStyles = () => css`
  max-width: 540px;
  margin: var(--spacing-l) auto;
  padding: var(--spacing-l);
  background-color: var(--color-bg);
  box-shadow: 2px 0 14px rgba(0, 0, 0, 10%);
  border-radius: 6px;
`;
