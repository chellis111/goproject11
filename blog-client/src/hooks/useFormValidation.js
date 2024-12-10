import { useState } from "react";

const useFormValidation = () => {
  const [formError, setFormError] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const validateInput = (inputData) => {
    if (
      !inputData?.firstName ||
      !inputData?.lastName ||
      !inputData?.email ||
      !inputData?.password ||
      !inputData?.confirmPassword
    ) {
      setFormError("All fields are required");
      return setFormIsValid(false);
    }

    if (inputData?.password !== inputData?.confirmPassword) {
      setFormError("Passwords do not match");
      return setFormIsValid(false);
    }

    if (inputData?.password.length < 8) {
      setFormError("Password must be at least 6 characters");
      return setFormIsValid(false);
    }

    if (!/[A-Z]/.test(inputData?.password)) {
      setFormError("Password must contain at least one uppercase letter");
      return setFormIsValid(false);
    }

    if (!/[0-9]/.test(inputData?.password)) {
      setFormError("Password must contain at least one number");
      return setFormIsValid(false);
    }

    if (!inputData?.email.includes("@")) {
      setFormError("Invalid email address");
      return setFormIsValid(false);
    }

    setFormError("");
    return setFormIsValid(true);
  };

  return [validateInput, formError, formIsValid];
};

export default useFormValidation;
