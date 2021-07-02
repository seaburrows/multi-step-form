import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --color-bg: #fff;
    --color-primary: #0074d9;
    --color-text: #444;
    --color-border: #ddd;
    --color-error: #c00;

    --spacing-s: 0.75rem;
    --spacing-m: 1.25rem;
    --spacing-l: 2rem;

    --font-s: 1.5rem;
    --font-m: 2rem;
    --font-l: 2.5rem;

    box-sizing: border-box;
    font-family: Arial, sans-serif;
    color: var(---color-primary);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
