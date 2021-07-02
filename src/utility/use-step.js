import { useCallback, useState } from "react";

const settings = { initialIndex: 0, steps: [] };

export const useStep = (options = {}) => {
  const { initialIndex, steps } = { ...settings, ...options };

  const [stepIndex, setStepIndex] = useState(initialIndex);

  const step = steps[stepIndex];
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === steps.length - 1;

  const next = useCallback(
    () => setStepIndex((stepIndex) => stepIndex + 1),
    []
  );
  const prev = useCallback(
    () => setStepIndex((stepIndex) => stepIndex - 1),
    []
  );

  const actions = {
    next: isLastStep ? null : next,
    prev: isFirstStep ? null : prev,
  };

  // console.log(isLastStep, steps.length, { actions });

  return {
    stepIndex,
    step,
    actions,
  };
};
