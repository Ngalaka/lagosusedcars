"use client";
import { signIn } from "next-auth/react";
import React from 'react'

export default function Google() {
  return (
    <>
     <div>
        {/* Google Button */}
        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 hover:bg-gray-100 transition-all duration-300"
        >
          {/* Google Icon */}
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-6 h-6"
          />

          {/* Button Text */}
          <span className="font-medium text-gray-700">
            Sign in with Google
          </span>
        </button>
      </div> 
    </>
  )
}
