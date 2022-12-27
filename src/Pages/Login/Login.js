import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../ContextApi/AuthContext";

const Login = () => {
  const { login, googleSignup } = useContext(AuthProvider);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        console.log(result.user);
        setMessage("");
        form.reset();
        toast.success("Signup Success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.message);
      });
  };

  const handelGoogleLogin = () => {
    googleSignup()
      .then((result) => {
        console.log(result?.user);
        toast.success("Signup Success");
        navigate(from, { replace: true });
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.message);
      });
  };

  return (
    <div className="w-[90%] lg:w-[35%] mx-auto py-8">
      <div>
        <h2 className="text-center text-2xl font-bold">LogIn</h2>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handelLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>

              <p className="text-red-600">{message}</p>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>

            <div>
              <div className="divider my-2">OR</div>
              <button onClick={handelGoogleLogin} className="w-full btn">
                Google
              </button>
            </div>

            <small className="pt-2">
              You have no account?{" "}
              <Link to="/signup" className="underline text-primary">
                SignUp
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
