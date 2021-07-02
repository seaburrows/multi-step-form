import { renderHook, act } from "@testing-library/react-hooks";
import { getPasswordRules } from "./get-password-rules";

const passwordRules = getPasswordRules();

describe("getPasswordRules utility", () => {
  test("includes hint text", () => {
    expect(passwordRules.hintText).toBeDefined();
  });

  const badPasswords = [
    "aaa",
    "AAA",
    "AAAaaa",
    "abcdefghi",
    "abcdefGHi",
    "a######",
  ];

  // includes 1 uppercase, 1 lowercase, 1 number, and 9 characters
  const goodPasswords = [
    "abcdefGH1",
    "abcdefGH1aks",
    "1Ra######",
    "@@######1Ra",
  ];

  test.each(badPasswords)("Bad %password", (password) => {
    expect(passwordRules.regex.test(password)).toBeFalsy();
  });

  test.each(goodPasswords)("Good %password", (password) => {
    expect(passwordRules.regex.test(password)).toBeTruthy();
  });
});
