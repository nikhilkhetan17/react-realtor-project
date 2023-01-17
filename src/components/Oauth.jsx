import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function Oauth() {
  return (
    <button className="flex items-center justify-center w-full bg-red-700 text-white py-3 uppercase rounded font-medium hover:bg-red-800 active:bg-red-900 shadow-md transition ease-in-out">
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}
