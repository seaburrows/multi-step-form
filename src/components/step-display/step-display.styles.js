import { css } from "@emotion/react";

export const useStyles = ({ isCurrent } = {}) => css`
  position: relative; /* required for pseudo element */
  flex: 1 1 auto;
  padding: var(--spacing-s) var(--spacing-m);
  text-align: center;
  color: var(--color-disabled);

  ${isCurrent &&
  css`
    color: var(--color-primary);
  `}
`;

// ::after pseudo-element is used as an animated indicator
// use in a separate function to allow tests to pass
// TODO: review this decision
export const usePseudoStyles = ({ isCurrent } = {}) => css`
  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -6px;
    width: 0;
    transition: width 0.15s ease-in-out;
    border-radius: 10px;
    border-bottom: solid 6px var(--color-highlight);
  }

  ${isCurrent &&
  css`
    color: var(--color-primary);

    &::after {
      left: 0;
      width: 100%;
    }
  `}
`;

export const useContainerStyles = () => css`
  display: flex;
  justify-content: space-evenly;
  padding: 0 0 var(--spacing-l) 0;
`;
