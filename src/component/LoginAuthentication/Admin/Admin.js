import React, { useState } from "react";
import { useForm } from "react-hook-form";
import img from "../../../logos/Group 1329.png";
import { useUpdatePassword } from "react-firebase-hooks/auth";
import Loading from "../../../Loading/Loading";
import auth from "../../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit } = useForm();
  const [updatePassword, updating, updatingError] = useUpdatePassword(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

  const onSubmit = (data) => {
    setEmail(data.email);
    setPassword(data.password);

    signInWithEmailAndPassword(email, password);
  };

  if (user || user2) {
    toast.success("Register Successful!!");
  }
  if (error || error2 || updatingError) {
    toast.error("Please enter a valid information !!");
  }
  return (
    <div className="Register vh-100 d-flex justify-content-center align-items-center">
      <div className="container ">
        <div className="w-50  mx-auto text-center">
          <img src={img} alt="" width={300} />
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <input
              {...register("email", { required: true })}
              placeholder="Email"
            />
            <input
              // type={"password"}
              {...register("password", { required: true })}
              placeholder="Password"
            />

            {loading && <Loading />}
            <input
              type="submit"
              value={"Admin"}
              className="bg-primary text-white fs-4 rounded mt-5"
            />
          </form>
          <Link to="/register" className="btn btn-link">
            All ready have an account?
          </Link>
          <button
            className="btn btn-link"
            onClick={async () => {
              await updatePassword(email);
              toast.success("Updated password");
            }}
          >
            Update password
          </button>
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

export default Admin;
