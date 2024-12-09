import { useState, useRef } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const passwordRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const confirmPassword = passwordRef.current.value;

    if (!firstName || !lastName || !email || !password) {
      return setErrorMessage("All fields are required");
    }

    if (password.length < 8) {
      return setErrorMessage("Password must be at least 8 characters");
    }

    if (confirmPassword.trim().length < 8) {
      return setErrorMessage("Password must be at least 8 characters");
    }

    // Check if password contains at least one capital letter (uppercase letter)
    const hasUpperCase = /[A-Z]/.test(password);
    if (!hasUpperCase) {
      return setErrorMessage(
        "Password must contain at least one uppercase letter"
      );
    }

    // Check if password contains at least one special character (e.g., !, @, #, etc.)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasSpecialChar) {
      return setErrorMessage(
        "Password must contain at least one special character"
      );
    }

    if (!email.includes("@")) {
      return setErrorMessage("Invalid email address");
    }
  };

  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <h1 className="text-center mb-5">Form Validation with React Js</h1>

          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <form onSubmit={submitFormHandler}>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                ref={passwordRef}
              />
            </div>

            <div className="form-group mb-3">
              <button
                type="submit"
                className="btn btn-secondary"
                style={{ width: "100%" }}
              >
                submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </section>
  );
};

export default Form;
