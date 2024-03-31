import React from "react";

const Login = ({ newUser, setNewUser, logNewUser }) => {
  return (
    <div className="card w-100 text-center border-white">
      <div className="row">
        <div className="col-12">
          <h5>Enter Username</h5>
        </div>
        <div className="d-flex justify-content-center py-1">
          <div className="col-4">
            <input
              type="text"
              name="username"
              value={newUser}
              onChange={(event) => setNewUser(event.target.value)}
              className="form-control mb-3"
              placeholder="Username"
              autoComplete="off"
              onKeyPress={(e) => (e.code === "Enter" ? logNewUser() : null)}
            />
            <button
              type="button"
              className="btn btn-success w-100"
              onClick={logNewUser}
            >
              Join!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
