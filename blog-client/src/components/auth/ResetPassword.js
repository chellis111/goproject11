const ResetPassword = () => {
  return (
    <div>
      <h3 className="mb-5">Reset Password</h3>
      <form>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group mb-3 mt-4">
          <button className="btn btn-secondary form-control" type="submit">
            Send Verification code
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
