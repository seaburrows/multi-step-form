import { css } from "@emotion/react";

export const useStyles = ({ isCurrent } = {}) => css`
  flex: 1 1 auto;
  padding: var(--spacing-s) var(--spacing-m);
  text-align: center;
  border-radius: 10px;
  color: var(--color-disabled);

  ${isCurrent &&
  css`
    color: var(--color-primary);
    background-color: #93e2f6;
  `}
`;

export const useContainerStyles = () => css`
  display: flex;
  justify-content: space-evenly;
  padding: 0 0 var(--spacing-l) 0;
`;
