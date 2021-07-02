import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --color-bg: #fff;
    --color-primary: #0074d9;
    --color-text: #444;
    --color-border: #ddd;
    --color-error: #c00;
    --color-information: #394c9a;

    --spacing-s: 0.25rem;
    --spacing-m: 0.5rem;
    --spacing-l: 0.75rem;

    --font-s: 1rem;
    --font-m: 1.4rem;
    --font-l: 1.8rem;

    box-sizing: border-box;
    font-family: Arial, sans-serif;
    color: var(---color-primary);
    background-color: #444;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
  }
`;
