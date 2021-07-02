import { useState } from "react";

const DEFAULTS = {};
export const useStep = (options = {}) => {
  const { initialIndex, steps } = { ...DEFAULTS, ...options };

  const [stepIndex, setStepIndex] = useState(initialIndex);

  const step = steps[stepIndex];
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === steps.length - 1;

  const actions = {
    next: isLastStep ? null : () => setStepIndex(stepIndex + 1),
    prev: isFirstStep ? null : () => setStepIndex(stepIndex - 1),
  };

  return {
    stepIndex,
    step,
    actions,
  };
};
