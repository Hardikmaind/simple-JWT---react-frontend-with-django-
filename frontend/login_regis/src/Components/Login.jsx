import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../api/api";

const Login = ({ showLogin, setShowLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token,setToken]=useState(null);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const navigate = useNavigate(); // Access the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await Axios.post("accounts/token/", { username, password });
    const token =res.data.access
    console.log("this is the token..store this in the localstorage",token)
    localStorage.setItem("token",token)
    setToken(token)
    // The replace: true option in the navigate function means that the navigation will replace the current entry in the history stack instead of adding a new one1. This is useful when you want to redirect the user to another page without keeping the previous page in the history stack.
    navigate("/dashboard", { replace: true }); // Navigate to the dashboard page

  };

  return (
    <>
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 mx-auto md:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-[#2563eb] hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
                <button
                  type="submit"
                  className="w-full text-white bg-[#2563eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?{" "}
                  <button
                    onClick={() => toggleLogin()}
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
