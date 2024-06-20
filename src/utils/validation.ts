import { FieldErrors, RegisterOptions } from "react-hook-form";

export const messageError = (
  errors: FieldErrors,
  source: string,
  validate: RegisterOptions
) => {
  const errorType = errors[source]?.type;
  const num = validate[errorType as keyof RegisterOptions];
  switch (errorType) {
    case "required":
      return `${source} is required`;
    case "minLength":
      return `${source} must be at least ${num} characters`;
    case "maxLength":
      return `${source} must be less than ${num} characters`;
    case "max":
      return `${source} must be less than ${num}`;
    case "min":
      return `${source} must be greater than ${num}`;
    case "pattern":
      return `${source} is not valid`;
    case "validate":
      return `${errors[source]?.message}`;
  }
};
