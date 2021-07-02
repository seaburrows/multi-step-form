/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import { globalStyles } from "./global.styles.js";

import { MultiForm } from "./components/multi-form";

import { useStyles } from "./app.style.js";
import { formConfig } from "./form.config.js";

// Print the values in a flattened object
// WARN: this is not future-proof
const reduceValuesToTable = (values) =>
  Object.values(values).reduce(
    (acc, step) => ({
      ...acc,
      ...Object.entries(step).reduce(
        (acc2, [key, value]) => ({
          ...acc2,
          [key]: value,
        }),
        {}
      ),
    }),
    {}
  );

const App = () => {
  const styles = useStyles();
  return (
    <div css={styles}>
      <Global styles={globalStyles} />

      <MultiForm
        formConfig={formConfig}
        onSubmit={(values) => {
          console.table(reduceValuesToTable(values));
        }}
      />
    </div>
  );
};

export default App;
