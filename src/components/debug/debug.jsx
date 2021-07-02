/** @jsxImportSource @emotion/react */
import React from "react";

import { useStyles } from "./debug.styles";

const isProduction = process.env.NODE_ENV === "production";

export const Debug = ({ data }) => {
  const styles = useStyles();

  if (isProduction) {
    return null;
  }

  return <pre css={styles}>{JSON.stringify(data, null, 2)}</pre>;
};
