import { css } from "@emotion/react";

export const useButtonStyle = () => css`
  display: block;
  min-width: 180px;
  margin: 8px auto;
  padding: var(--spacing-m) var(--spacing-l);
  font-size: var(--font-s);
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: #ea4c89;
  transition: background-color 0.15s;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: #f082ac;
  }
`;
