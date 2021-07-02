export const getPasswordRules = () => ({
  hintText:
    "Please ensure your password has at least 9 characters and includes: one uppercase letter, one lowercase letter, and one number.",
  regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{9,}$/,
});
