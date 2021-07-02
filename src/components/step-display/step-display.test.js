import React from "react";
import { render, screen } from "@testing-library/react";
import { StepDisplay } from "./step-display";
import { useStyles } from "./step-display.styles";

describe("<StepDisplay />", () => {
  test("Renders all steps", () => {
    render(<StepDisplay stepTitles={["one", "two", "three"]} />);

    expect(screen.getByText("one")).toBeInstanceOf(HTMLDivElement);
  });

  test("Identifies the selected item", () => {
    const style = useStyles();
    const selectedStyle = useStyles({ isCurrent: true });

    render(<StepDisplay stepIndex={1} stepTitles={["one", "two", "three"]} />);

    // Check the rendered styles match the useStyle hook
    expect(screen.getByText("one")).toHaveStyle(style.styles);
    expect(screen.getByText("two")).toHaveStyle(selectedStyle.styles);
  });
});
