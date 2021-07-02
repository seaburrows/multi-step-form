import { css } from "@emotion/react";

export const useStyles = ({ isCurrent }) => css`
  flex: 1 1 auto;
  padding: var(--spacing-s) var(--spacing-m);
  text-align: center;
  background-color: ${isCurrent ? "orange" : "white"};
`;

export const useContainerStyles = () => css`
  display: flex;
  justify-content: space-evenly;
`;
