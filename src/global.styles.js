import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --color-bg: #fff;
    --color-primary: #384455;
    --color-disabled: #ccc;
    --color-error: #c00;
    --color-information: #4085ff;
    --color-highlight: #ea4c89;
    --color-highlight-alt: #f082ac;

    --spacing-s: 0.4rem;
    --spacing-m: 0.75rem;
    --spacing-l: 1rem;

    --font-s: 1rem;
    --font-m: 1.2rem;
    --font-l: 1.6rem;

    box-sizing: border-box;
    font-family: Arial, sans-serif;
    color: var(--color-primary);
    background-color: #f1f1f1;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
  }
`;
