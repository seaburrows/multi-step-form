export const getFormSchema = (config) =>
  config.reduce((acc, cur) => {
    return cur.schema ? { ...acc, [cur.name]: cur.schema } : acc;
  }, {});

export const getStepLabels = (config) => config.map((cur) => [cur.label]);

export const getStepComponents = (config) =>
  config.filter((item) => !item.submittedPage).map((step) => step.component);

export const getSubmittedPage = (config) =>
  config.find((item) => item.submittedPage)?.component;
