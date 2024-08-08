import { FormInput, Submitbtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { google } from "../assets/images";
import { useUserContext } from "../context/user_context";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";

const Login = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <section className="grid lg:grid-cols-2 place-items-center gap-20">
      {/* testimonials */}
      <div className="space-y-20 lg:order-none order-2">
        <div className="space-y-5">
          <h1 className="text-3xl font-semibold"> Student Testimonials </h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            officiis ab molestiae non dolores. Libero totam consectetur quaerat
            fugit inventore!
          </p>
        </div>
      </div>
      {/* form */}
      <Form
        method="post"
        className="card w-80 md:w-full lg:w-full p-8 bg-base-100 shadow-2xl flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <p className="text-center text-sm font-light">
          Welcome back! Please log in to access your account
        </p>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          placeholder="Enter your Email"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          placeholder="Enter your Password"
        />
        <div className="mt-4">
          <Submitbtn text="Login" />
        </div>
        <div className="flex flex-row items-center gap-10 my-5">
          <div className="w-[100%] h-0.5 bg-gray-400 "></div>
          <p> OR </p>
          <div className="w-[100%] h-0.5 bg-gray-400 "></div>
        </div>
        <button
          type="button"
          className="btn bg-body border-none font-medium hover:bg-orange70"
          onClick={loginWithRedirect}
        >
          <img src={google} alt="" />
          Log in with Google
        </button>

        <p className="text-center">
          Dont't have an account?
          <Link
            to="/register"
            className="ml-2 mt-5 link link-hover link-primary capitalize"
          >
            Sign Up
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
