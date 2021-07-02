import { renderHook, act } from "@testing-library/react-hooks";
import { useStep } from "./use-step";

describe("useStep hook", () => {
  test("defaults to index 0", () => {
    const { result } = renderHook(() => useStep({ steps: [1, 2] }));

    expect(result.current.stepIndex).toBe(0);
  });

  test("allows index to be set", () => {
    const { result } = renderHook(() =>
      useStep({ initialIndex: 1, steps: [1, 2] })
    );

    expect(result.current.stepIndex).toBe(1);
  });

  test.todo("returns development error when set index does not exist");

  test("includes a `next` function when not the final step", () => {
    const { result } = renderHook(() => useStep({ steps: [1, 2] }));

    expect(typeof result.current.actions.next).toBe("function");

    act(() => {
      result.current.actions.next();
    });

    expect(result.current.actions.next).toBeNull();
  });

  test("includes a `prev` function when not the first step", () => {
    const { result } = renderHook(() =>
      useStep({ initialIndex: 1, steps: [1, 2] })
    );

    expect(typeof result.current.actions.prev).toBe("function");

    act(() => {
      result.current.actions.prev();
    });

    expect(result.current.actions.prev).toBeNull();
  });

  test("returns the current step", () => {
    const { result } = renderHook(() => useStep({ steps: [1, 2] }));

    expect(result.current.step).toBe(1);

    act(() => {
      result.current.actions.next();
    });

    expect(result.current.step).toBe(2);
  });
});
