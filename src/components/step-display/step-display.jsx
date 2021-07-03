/** @jsxImportSource @emotion/react */
import { useStyles, usePseudoStyles, useContainerStyles } from "./step-display.styles";

const StepItem = ({ isCurrent, name }) => {
  const style = useStyles({ isCurrent });
  const pseudoStyle = usePseudoStyles({ isCurrent });

  return <div css={[style, pseudoStyle ]}>{name}</div>;
};

export const StepDisplay = ({ stepIndex = 0, stepTitles }) => {
  const styles = useContainerStyles();

  return (
    <div css={styles}>
      {stepTitles.map((name, index) => (
        // using index as a key here is acceptable since this is currently a unique identifier. // TODO: harden
        <StepItem key={index} name={name} isCurrent={stepIndex === index} />
      ))}
    </div>
  );
};
