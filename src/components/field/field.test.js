import React from "react";
import { render, screen } from "@testing-library/react";

import { Field } from "./field";

describe("<Field />", () => {
  test("Renders label and input", () => {
    render(<Field name="test" label="Label text" getFieldErrors={() => []} />);

    expect(screen.getByText("Label text")).toBeInstanceOf(HTMLLabelElement);

    // This also checks that the label and input are semantically-linked
    const inputElement = screen.getByLabelText("Label text");

    expect(inputElement).toBeInstanceOf(HTMLInputElement);
    expect(inputElement).toBeInstanceOf(HTMLInputElement);
  });

  test("Renders errors when supplied", () => {
    render(
      <Field
        name="test"
        label="Label text"
        getFieldErrors={() => ["my error message", "also this is broken"]}
      />
    );

    expect(screen.getByText("my error message")).toBeInTheDocument();
    expect(screen.getByText("also this is broken")).toBeInTheDocument();
  });

  test("Renders hint when supplied", () => {
    render(
      <Field
        name="test"
        label="Label text"
        hint="some helpful hint"
        getFieldErrors={() => []}
      />
    );

    expect(screen.getByText("some helpful hint")).toBeInTheDocument();
  });
});
