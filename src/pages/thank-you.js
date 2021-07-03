/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const thanksYouPageCss = css`
  h2 { 
    margin: var(--spacing-m) 0;
  }

  p {
    margin: var(--spacing-m) 0;
  }

  img {
    width: 100%;
  }
`;

export const ThankYouPage = () => (
  <div css={thanksYouPageCss}>
    <h2>Nice one!</h2>
    <p>Please check your email - you should have an email from us already.</p>
    <img
      src="https://media.giphy.com/media/xT5LMDjUD70GVSqShq/giphy.gif"
      alt="Homer Simpson using a computer"
    />
  </div>
);
