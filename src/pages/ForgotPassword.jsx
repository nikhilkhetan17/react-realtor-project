import React, { useState } from "react";

import { Link } from "react-router-dom";
import Oauth from "../components/Oauth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section>
      <h1 className="text-3xl text-center font-bold mt-6">Forgot Password</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-10 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:md-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="w-full px-4 py-2 text-xl text-gray-700 border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between sm:text-lg mt-4">
              <p>
                Don't have a account?
                <Link
                  to={"/sign-up"}
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to={"/sign-in"}
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                >
                  Sign-in instead
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded font-medium uppercase shadow-md hover:bg-blue-700 transition ease-in-out active:bg-blue-800"
            >
              Send reset password
            </button>
            <div className="my-4">
              <p className="text-center font-semibold">OR</p>
            </div>
            <Oauth />
          </form>
        </div>
      </div>
    </section>
  );
}
