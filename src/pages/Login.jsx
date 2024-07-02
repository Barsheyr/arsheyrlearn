import { FormInput, Submitbtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { google } from "../assets/images";

const Login = () => {
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

        {/* <div className="bg-whiteFour p-10">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div> */}
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
          // onClick={loginAsGuestUser}
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
