import React from "react";
import { useForm } from "react-hook-form";
import img from "../../../logos/Group 1329.png";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../../../Loading/Loading";
import auth from "../../../firebase.init";

import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  const [updateProfile, updating, error3] = useUpdateProfile(auth);

  const onSubmit = async (data) => {
    const name = data.fullName;
    const email = data.email;
    const password = data.password;

    const date = data.date;
    const description = data.description;
    const organize = data.Organize;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Updated profile");

    await axios
      .post("http://localhost:5000/users", {
        name,
        email,
        date,
        description,
        organize,
      })
      .then((res) => {
        console.log(res);
      });
  };

  if (user || user2) {
    toast.success("Register Successful!!");
    navigate(from, { replace: true });
  }
  if (error || error2) {
    toast.error("Please enter a valid information !!");
  }
  return (
    <div className="Register vh-100 d-flex justify-content-center align-items-center">
      <div className="container ">
        <div className="w-50  mx-auto text-center">
          <img src={img} alt="" width={300} />
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <input
              {...register("fullName", { required: true })}
              placeholder="Full Name"
            />

            <input
              {...register("email", { required: true })}
              placeholder="Email"
            />
            <input
              // type={"password"}
              {...register("password", { required: true })}
              placeholder="Password"
            />
            <input
              {...register("date", { required: true })}
              placeholder="Date"
            />
            <input
              {...register("description", { required: true })}
              placeholder="Description"
            />
            <input
              {...register("Organize", { required: true })}
              placeholder="Organize books at the library."
            />
            {loading && <Loading />}
            <input
              type="submit"
              value={"Registration"}
              className="bg-primary text-white fs-4 rounded mt-5"
            />
          </form>
          <Link to="/admin" className="btn btn-link">
            All ready have an Account
          </Link>
          <br />
          <button
            className="btn btn-outline-primary"
            onClick={() => signInWithGoogle()}
          >
            Google SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
