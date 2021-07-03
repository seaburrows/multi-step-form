import { css } from "@emotion/react";

export const useActionsStyle = () => css`
  display: flex;
  justify-content: space-between;

  > *:last-child {
    margin-left: auto;
  }
`;

// TODO: move Button into it's own component
export const useButtonStyle = () => css`
  min-width: 180px;
  margin: var(--spacing-l) 0;
  padding: var(--spacing-m) var(--spacing-l);
  font-size: var(--font-s);
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: var(--color-highlight);
  transition: background-color 0.15s;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--color-highlight-alt);
  }
`;
