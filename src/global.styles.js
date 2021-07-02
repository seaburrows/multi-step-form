import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --color-bg: #fff;
    --color-primary: #444;
    --color-border: #aaa;
    --color-error: #c00;
    --color-information: #4085ff;

    --spacing-s: 0.4rem;
    --spacing-m: 0.75rem;
    --spacing-l: 1rem;

    --font-s: 1rem;
    --font-m: 1.2rem;
    --font-l: 1.6rem;

    box-sizing: border-box;
    font-family: Arial, sans-serif;
    color: var(---color-primary);
    background-color: #f1f1f1;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
  }
`;
