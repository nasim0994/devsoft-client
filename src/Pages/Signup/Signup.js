import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../ContextApi/AuthContext";

const Signup = () => {
  const { signup, updateUser } = useContext(AuthProvider);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handelSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    signup(email, password)
      .then((result) => {
        console.log(result.user);
        handelUserProfile(name, image);
        form.reset();
        toast.success("Signup Success");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.message);
      });
  };

  // Handel user Profile
  const handelUserProfile = (name, image) => {
    const profile = {
      displayName: name,
      photoURL: image,
    };

    updateUser(profile)
      .then((result) => {})
      .catch((error) => {
        console.error(error);
        setMessage(error.message);
      });
  };

  return (
    <div className="w-[90%] lg:w-[35%] mx-auto py-8">
      <div>
        <h2 className="text-center text-2xl font-bold">SignUp</h2>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handelSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  name="image"
                  required
                />
              </div>
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
                  SignUp
                </button>
              </div>
            </form>

            <small className="pt-2">
              Already have an account?{" "}
              <Link to="/login" className="underline text-primary">
                Login
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
