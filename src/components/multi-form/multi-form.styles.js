import { css } from "@emotion/react";

export const useButtonStyle = () => css`
  margin: 8px 0;
  padding: var(--spacing-m) var(--spacing-l);
  font-size: var(--font-s);
  border: solid 1px #000;
  border-radius: 2px;
  background: #5ce500;
  cursor: pointer;
`;
