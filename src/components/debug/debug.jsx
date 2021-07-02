import React from "react";

import { useStyles } from "./debug.styles";

// Vite environment mode check
const isProduction = import.meta.env.MODE === "production";

export const Debug = ({ data }) => {
  if (isProduction) {
    return null;
  }

  const styles = useStyles();

  return <pre css={styles}>{JSON.stringify(data, null, 2)}</pre>;
};
