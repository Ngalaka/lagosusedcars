"use client"
import React, { useState, useMemo } from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TiStarburstOutline } from "react-icons/ti";
import { LuUsers } from "react-icons/lu";
import Image from "next/image";

import { AiTwotoneMail } from "react-icons/ai";
import { FiPhoneIncoming } from "react-icons/fi";
import { FaEye, FaEyeSlash, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Link from "next/link";


export default function page() {

  // state for loading
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // destructure useForm to get register, handleSubmit, errors, and reset functions
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",


    },
  });


  const onSubmit = async (data) => {
    setLoading(true);

    try {

      alert("Form Submitted Successfully", data);

      // Clear all form fields
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

  }

  return (
    <>

      {/* Hero Section */}
      <div className='w-full h-auto'>

        {/* Nav Section */}
        <div className='w-full h-17.5  flex justify-between items-center gap-2 px-14'>

          {/* section for Logo */}
          <div>
            <div className='cursor-pointer'>
              <p>LAGOS</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <span><IoCarSportOutline /></span>
              <span className='text-sm'>Used Cars</span>
            </div>
          </div>

          {/* search section */}

          <div className='flex items-center'>
            <div>
              <input type="text" placeholder='search' className='border border-gray-300 outline-none w-80 pl-16 py-2 rounded-lg relative placeholder:text-sm' />
              <span className='absolute left-3/12 top-7 text-xl'><CiSearch /></span>
            </div>

            <div dir='rtl'>
              <button className='bg-blue-900 w-20 py-2 text-white text-sm rounded-s-lg cursor-pointer'>search</button>
            </div>
          </div>


          {/* login section */}

          <div className='flex justify-between items-center gap-8 cursor-pointer '>
            <div className='flex items-center gap-2'>
              <span className='cursor-pointer'><TiStarburstOutline /></span>
              <p className='text-sm cursor-pointer py-2 '>Drive Now Pay Later</p>
            </div>

            <div className='flex items-center gap-2 cursor-pointer'>
              <span className='cursor-pointer'> <LuUsers /></span>
              <p className='text-sm cursor-pointer py-2  '>Login</p>
            </div>

            <div>
              <button className='bg-blue-900 w-28 py-2  text-white text-sm cursor-pointer rounded-lg'>Sell Your Car</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sign In */}

      <div className="w-full h-auto py-16 px-16 flex flex-row justify-center items-center gap-8 border border-black/10 ">
        {/* ?car image for sign in */}
        <div className="w-[40%] h-auto overflow-hidden">
          <Image src="/image/car4.jfif" alt="car image" width={500} height={500} className=" float-car  w-full h-auto object-cover" />
        </div>

        {/* sign in form */}
        <div className="w-[50%] h-auto flex flex-col justify-start items-start gap-4">

          <form onSubmit={handleSubmit(onSubmit)} >

            <div className="w-full h-auto py-4 px-2 flex flex-col justify-start items-start gap-4 shadow-lg border m-[1px] border-black/50 rounded-lg">
              <div className="w-[60%] h-auto py-4 px-2 m-auto">
                <p className="text-4xl text-blue-700 text-center  ">Create your seller account</p>
              </div>


              <div className="py-4">
                <input
                  type="text" placeholder=" Name"
                  className="w-150 border py-3 pl-3 pr-10 border-black/40 outline-none mx-2"
                  {...register("name", {
                    required: "First name is required",

                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.name.message}
                  </p>
                )}
              </div>



              {/* email */}
              <div className="py-4">
                <input
                  type="email" placeholder="ngalakagift@gmail.com"
                  className="w-150 border py-3 pl-3 pr-10 border-black/40 outline-none mx-2"

                  {...register("email", {
                    required: "email is required",

                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <div className="flex justify-center items-center gap-2 ">
                  <div className=" py-2">
                    <input
                      type={showPassword ? "text" : "password"} placeholder="............"
                      className="w-150 border py-3 pl-3 pr-10 border-black/40 outline-none mx-2 placeholder:text-sm font-semibold"
                      {...register("password", {
                        required: "password is required",

                      })}
                    />
                  </div>

                  <div className="relative  -left-20 cursor-pointer">
                    <span onClick={() => setShowPassword((prev) => !prev)} >
                      {showPassword ? <FaEyeSlash size={30} /> : <FaEye size={30} />}
                    </span>
                  </div>

                </div>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.password.message}
                  </p>
                )}
              </div>


              <div className=" w-100 m-auto py-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`p-3 rounded text-white w-100 py-2 px-4 ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-900 hover:bg-blue-700"}`}
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </button>
              </div>
              {/* already have an account? */}
              <div className="w-full h-auto py-4 flex justify-center items-center gap-2 px-4">
                <span>Already have an account? </span>

                <Link href="/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </div>

                {/* Admin dashboard */}
                <div className="w-full h-auto py-4  flex justify-center items-center gap-2 px-4">
                  <p className="text-3xl text-black/30 font-bold">Admin Dashboard</p>
                </div>
            </div>
          </form>
        </div>
      </div>

      {/* footer */}
      <div className="w-full h-auto bg-gray-100 py-8">

        {/* footer detail */}
        <div className="w-full h-auto bg-gray-100 py-8 px-16 flex flex-row justify-between items-start gap-8">
          <div className="w-1/4 h-auto flex flex-col justify-start items-start gap-4">
            {/* logos  */}
            <p>LAGOS</p>
            <div className='flex items-center gap-2 cursor-pointer'>
              <span><IoCarSportOutline /></span>
              <span className='text-sm'>Used Cars</span>
            </div>

            <div className="w-full h-auto py-4 px-2">
              <p>
                Lagos's most trusted used car marketplace for buyers and sellers
                used cars. Verified dealers, transparent pricing and a seamless
                experience. from search to ownership.
              </p>
            </div>

            <div className="w-full h-auto py-4 px-2">
              {/* phone number */}
              <div className='flex items-center gap-2 cursor-pointer'>
                <span className="text-xl text-blue-900"><FiPhoneIncoming /></span>
                <p>+234 7059743120</p>
              </div>

              {/* email */}
              <div className='flex items-center gap-2 cursor-pointer'>
                <span className="text-xl text-blue-900"><AiTwotoneMail /></span>
                <p className="text-blue-900">hello@lagosusedcars.ng</p>
              </div>
            </div>
          </div>

          {/* Buy a car */}
          <div className="w-1/4 h-auto ">
            <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
              <p className="text-sm  text-black/50">Buy a Car</p>
            </div>

            <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
              <ul className="flex flex-col justify-start items-start gap-2 space-y-2">
                <li>Search Listing</li>
                <li>Tokunbo Cars</li>
                <li>Nigerian Used Cars</li>
                <li>Brand New</li>
                <li>Drive Now Pay later</li>
                <li>Nierian Used Cars</li>
              </ul>
            </div>
          </div>

          {/* Sell a Car */}
          <div>
            <div className="w-full h-auto flex flex-col justify-start items-start gap-4" >
              <p className="text-sm  text-black/50">Sell a Car</p>
            </div>

            <div className="w-full h-auto flex flex-col justify-start items-start gap-2" >
              <ul className="flex flex-col justify-start items-start gap-2 space-y-2">
                <li>List your car</li>
                <li>Dealer Registration</li>
                <li>Pricing Plans</li>
                <li>Car Valuation</li>
              </ul>
            </div>
          </div>

          {/* Company */}
          <div className="w-1/4 h-auto ">
            <div className="w-full h-auto flex flex-col justify-start items-start gap-4" >
              <p className="text-sm  text-black/50">Company</p>
            </div>

            <div className="w-full h-auto flex flex-col justify-start items-start gap-2" >
              <ul className="flex flex-col justify-start items-start gap-2 space-y-2">
                <li>About Us</li>
                <li>Services</li>
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copy Right */}

        <div className="w-full h-auto bg-gray-100 py-4 px-16 flex flex-row justify-between items-center gap-8">
          <div>
            <p>2023 Lagos Used Cars. All rights reserved.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 px-4 py-2">
            <span className="text-xl text-blue-900"><FaFacebook /></span>
            <span className="text-xl text-blue-900"><FaTwitter /></span>
            <span className="text-xl text-blue-900"><FaInstagram /></span>
          </div>
        </div>
      </div>
    </>
  )
}
