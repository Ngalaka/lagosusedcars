"use client"
import React, { useState, useMemo } from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TiStarburstOutline } from "react-icons/ti";
import { LuUsers } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";


export default function page() {
  // Mock Data representing vehicles in Nigeria
  const VEHICLE_DATA = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2018,
      body: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      price: 800000,
      location: "Lagos",
      image: "/image/nissan.jfif"
    },
    {
      id: 2,
      make: "Toyota",
      model: "Camry",
      year: 2018,
      body: "Sedan",
      transmission: "Manual",
      fuel: "Petrol",
      price: 9800000,
      location: "Lagos",
      image: "/image/nissan.jfif"
    },
    {
      id: 3,
      make: "Toyota",
      model: "Corolla",
      year: 2020,
      body: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      price: 15500000,
      location: "Abuja",
      image: "/image/nissan.jfif"
    },
    {
      id: 4,
      make: "Honda",
      model: "Civic",
      year: 2019,
      body: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      price: 12000000,
      location: "Lagos",
      image: "/image/nissan.jfif"
    },

    {
      id: 5,
      make: "Toyota",
      model: "Prado",
      year: 2017,
      body: "SUV",
      transmission: "Automatic",
      fuel: "Diesel",
      price: 35000000,
      location: "Lagos",
      image: "/image/nissan.jfif"
    },

    {
      id: 6,
      make: "Toyota",
      model: "Camry",
      year: 2018,
      body: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      price: 9800000,
      location: "Lagos",
      image: "/image/nissan.jfif"
    },
    {
      id: 7,
      make: "Toyota",
      model: "Camry",
      year: 2018,
      body: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      price: 9800000,
      location: "Lagos",
      image: "/image/nissan.jfif"
    },
    {
      id: 8,
      make: "Toyota",
      model: "Corolla",
      year: 2020,
      body: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      price: 15500000,
      location: "Lagos",
      image: "/image/nissan.jfif"
    },
    {
      id: 9,
      make: "Honda",
      model: "Civic",
      year: 2019,
      body: "Sedan",
      transmission: "Automatic",
      fuel: "Petrol",
      price: 12000000,
      location: "Lagos",
      image: "/image/nissan.jfif"
    },

    {
      id: 10,
      make: "Toyota",
      model: "Prado",
      year: 2017,
      body: "SUV",
      transmission: "Manual",
      fuel: "Diesel",
      price: 35000000,
      location: "Lagos",
      image: "/image/nissan.jfif"
    },
  ];

  // --- 1. State Configurations ---
  const [loading, setLoading] = useState(false)
  const [minPrice, setMinPrice] = useState(5000000);
  const [maxPrice, setMaxPrice] = useState(65000000);
  const [make, setMake] = useState("Toyota");
  const [bodyType, setBodyType] = useState("Sedan");
  const [transmission, setTransmission] = useState("Automatic");
  const [fuelType, setFuelType] = useState("Petrol");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);



  // Absolute boundaries for the slider tracks
  const absoluteMin = 5000000;
  const absoluteMax = 65000000;

  // --- 2. Live Filtering Logic ---
  const filteredVehicles = useMemo(() => {
    return VEHICLE_DATA.filter((car) => {
      return (
        car.price >= minPrice &&
        car.price <= maxPrice &&
        (make ? car.make === make : true) &&
        (bodyType ? car.body === bodyType : true) &&
        (transmission ? car.transmission === transmission : true) &&
        (fuelType ? car.fuel === fuelType : true)
      );
    });
  }, [minPrice, maxPrice, make, bodyType, transmission, fuelType]);

  // --- 3. Format Currency Utility ---
  const formatCurrency = (value) => {
    return "₦" + value.toLocaleString("en-NG");
  };

  // --- 4. Handle Range Slider Dynamics ---
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1000000);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1000000);
    setMaxPrice(value);
  };

  // Calculate percentage positions for the active blue track bar overlay
  const minPercent = ((minPrice - absoluteMin) / (absoluteMax - absoluteMin)) * 100;
  const maxPercent = ((maxPrice - absoluteMin) / (absoluteMax - absoluteMin)) * 100;




  //  // destructure useForm to get register, handleSubmit, errors, and reset functions

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: 'onTouched', // Validates when a user clicks out of an input
  });

  // show password character 
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  }
  // Handle submit data

  const onSubmit = async (data) => {

    console.log('Form Submitted Successfully:', data);
    alert('Registration Successful!',data);

    // Simulate an API call (e.g., sending data to a Next.js API route)
    await new Promise((resolve) => setTimeout(resolve, 5000));

    reset(); // Clear the form fields after successful submission
  }

  return (
    <>

      {/* Hero Section */}
      <div className=' w-full h-auto'>

        {/* Nav Section */}
        <div className='flex items-center lg:w-full h-17.5  justify-between gap-2 px-14  '>

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




      {/* Hero Sectiom */}
      <div className="relative h-screen  w-full  bg-cover bg-center bg-no-repeat  "
        style={{ backgroundImage: "url('/image/carBg6.jfif')" }}>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex justify-around items-center blur-sm">

          {/* card for logos platform */}
          <div className=' w-160 py-16 px-16  text-white '>
            <p className='text-7xl  py-4'>Lagos #1 Platform to Buy & Sell Used Cars </p>
            <p className='text-xl  py-4'>Fine verified tokunbo, Nigerian-used and brand new cars transparent pricing. Real dealers</p>
          </div>

          {/* form for max-min filer */}
          <div className='w-100 h-auto bg-white  rounded-4xl '>
            {/* layout or container for form */}
            <div className="h-120 w-full flex items-center justify-center pt-12 rounded-4xl   ">
              {/* Main UI Container Widget */}
              <div className="bg-white rounded-4xl shadow-xl p-6 w-full h-auto max-w-md border border-slate-100">

                {/* Header Title */}
                <h2 className="text-xl font-bold text-slate-800 tracking-tight mb-6">
                  Find your next awesome vehicle
                </h2>

                {/* --- Price Range Readout --- */}
                <div className="flex justify-between items-center text-sm font-semibold text-[#1e295d] mb-4">
                  <div>
                    <span>{formatCurrency(minPrice)}</span>
                    <span className="text-xs text-gray-400 font-normal ml-1">(Min)</span>
                  </div>
                  <div className="text-right">
                    <span>{formatCurrency(maxPrice)}</span>
                    <span className="text-xs text-gray-400 font-normal ml-1">(Max)</span>
                  </div>
                </div>

                {/* --- Custom Double Slider System --- */}
                <div className="relative w-full h-2 rounded-full bg-slate-200 mb-8 mt-2">
                  {/* Active colored bar overlay indicator */}
                  <div
                    className="absolute h-full  bg-blue-900 rounded-full"
                    style={{
                      left: `${minPercent}%`, right: `${100 - maxPercent}%`,
                    }}
                  />

                  {/* Native Hidden Range Inputs Overlaid on Top */}
                  <input
                    type="range"
                    min={absoluteMin}
                    max={absoluteMax}
                    step={500000}
                    value={minPrice}
                    onChange={handleMinChange}
                    className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none custom-slider-thumb z-20"
                  />
                  <input
                    type="range"
                    min={absoluteMin}
                    max={absoluteMax}
                    step={500000}
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none custom-slider-thumb z-20"
                  />
                </div>

                {/* --- Dropdown Selector Grid --- */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {/* Brand/Make Picker */}
                  <div className="relative border border-gray-200 rounded-xl px-3 py-2 flex items-center bg-white shadow-sm hover:border-gray-300">
                    <span className="mr-2 text-red-600 font-bold text-sm"></span>
                    <select
                      value={make}
                      onChange={(e) => setMake(e.target.value)}
                      className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none appearance-none cursor-pointer"
                    >
                      <option value="Toyota">Toyota</option>
                      <option value="Honda">Honda</option>
                      <option value="Toyota">BMW</option>
                      <option value="Honda">Ben</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Honda">Honda</option>

                    </select>
                  </div>

                  {/* Body Type Picker */}
                  <div className="relative border border-gray-200 rounded-xl px-3 py-2 flex items-center bg-white shadow-sm hover:border-gray-300">
                    <span className="mr-2 text-blue-500 text-sm"></span>
                    <select
                      value={bodyType}
                      onChange={(e) => setBodyType(e.target.value)}
                      className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none appearance-none cursor-pointer"
                    >
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                    </select>
                  </div>

                  {/* Gear Transmission Picker */}
                  <div className="relative border border-gray-200 rounded-xl px-3 py-2 flex items-center bg-white shadow-sm hover:border-gray-300">
                    <span className="mr-2 text-indigo-500 text-sm"></span>
                    <select
                      value={transmission}
                      onChange={(e) => setTransmission(e.target.value)}
                      className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none appearance-none cursor-pointer"
                    >
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </div>

                  {/* Fuel Category Picker */}
                  <div className="relative border border-gray-200 rounded-xl px-3 py-2 flex items-center bg-white shadow-sm hover:border-gray-300">
                    <span className="mr-2 text-blue-600 text-sm"></span>
                    <select
                      value={fuelType}
                       onChange={(e) => setFuelType(e.target.value)}
                      className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none appearance-none cursor-pointer"
                    >
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                    </select>
                  </div>
                </div>

                {/* --- Live Filtered Matching Car Cards --- */}
                <div className="space-y-3 max-h-25 overflow-y-auto pr-1 mb-6 scrollbar-thin">
                  {filteredVehicles.length > 0 ? (
                    filteredVehicles.map((car) => (
                      <div
                        key={car.id}
                        className="flex items-center p-2.5 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
                      >
                        <img
                          src={car.image}
                          alt={`${car.make} ${car.model}`}
                          className="w-8 h-8 object-cover rounded-xl bg-slate-100 mr-3"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-slate-800 truncate">
                            {car.make} {car.model} ({car.year})
                          </h4>
                          <div className="flex items-center text-xs text-gray-400 mt-0.5">
                            <span className="mr-1"> </span> {car.location}
                          </div>
                        </div>
                        <div className="text-right pl-2">
                          <span className="text-sm font-bold text-slate-700 whitespace-nowrap">
                            {formatCurrency(car.price)}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-sm text-gray-400">
                      No vehicles fit your specified filter ranges.
                    </div>
                  )}
                </div>

                {/* --- Interactive Primary Button Footer --- */}
                <button className="w-full bg-[#0b0c43] hover:bg-[#16186b] cursor-pointer text-white font-semibold py-4 px-4 rounded-2xl transition-colors shadow-md flex items-center justify-center text-md mb-4">
                  Find {filteredVehicles.length} Vehicles
                </button>

                {/* Advanced Feature Action */}
                <div className="text-center">
                  <button className="text-xs text-gray-500 font-semibold hover:text-slate-800 transition-colors inline-flex items-center gap-1">
                    Advanced Search <span>→</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>



      {/* sign up section */}
      <div className="sm:  lg: w-full h-auto  absolute top-20 z-20 ">
        <div className="lg: w-200 h-full m-auto shadow-xl  bg-white">

          <div className="flex justify-end items-center">
            <span className="text-2xl mr-30 pt-10"><RiCloseCircleLine /></span>
          </div>

          <div className=" py-2">
            <h1 className="text-center font-semibold">Register via email and phone</h1>
          </div>

          {/* form section */}
          <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

              <div className=" w-100 ml-20">
                <input
                  type="email" placeholder="Enter email"
                  className={`w-150 border py-3 pl-3 pr-10 border-black/40 outline-none mx-2 ${errors.email ? 'border-2 border-red-500' : ' border border-green-700'
                    }`}
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.email.message}
                  </p>
                )}
              </div>


              <div className=" w-100 ml-20 py-2">
                <div>
                  <div className="flex">
                    <div>
                      <input
                        type={showPassword ? "text" : "password"} placeholder="password"
                        value={password}
                        className={`w-150  border border-black/40 py-3 pl-3 pr-10 mx-2 outline-none relative  ${errors.password ? 'border-2 border-red-500' : 'border-2 border-green-700'
                          }`}
                        {...register("password", {
                          required: "password is required",
                          onChange: (e) => {
                            setPassword(e.target.value);
                          },
                          minLength: {
                            value: 10,
                            message: "Password must be at least 10 characters",
                          },
                        })}
                      />
                    </div>

                    <div className="">
                      <span className=" text-black/40 py-1  pl-3 relative -top-2 -left-12.5 " aria-label={showPassword ? "Hide password" : "Show password"} onClick={togglePasswordVisibility}> {showPassword ? <FiEyeOff size={25} /> : <FiEye size={25} />}</span>
                    </div>

                  </div>

                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1 pl-4">
                      {errors.password.message}
                    </p>
                  )}
                </div>


                <div className="">
                  <span className="text-black/40 ">Never disclose your logos used car password to anyone</span>
                </div>
              </div>

              <div className=" w-100 ml-20 py-1">
                <input
                  type="text" placeholder="First name"
                  className={`w-150 border py-2 pl-3 pr-10 border-black/40  mx-2 outline-none ${errors.email ? 'border-2 border-red-500' : ' border border-green-700'
                    }`}
                  {...register("fName", {
                    required: "first name is required",
                    minLength: {
                      value: 2,
                      message: 'Must be at least 2 characters'
                    }

                  })}
                />
                {errors.fName && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.fName.message}
                  </p>
                )}
              </div>

              <div className=" w-100 ml-20 py-1">
                <input
                  type="text" placeholder="Last name"
                  className={`w-150 border py-2 pl-3 pr-10 border-black/40 p-2 mx-2 outline-none ${errors.email ? 'border-2 border-red-500' : ' border border-green-700'
                    }`}
                  {...register("lName", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: 'Must be at least 2 characters'
                    }
                  })}
                />
                {errors.lName && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.lName.message}
                  </p>
                )}
              </div>


              <div className=" w-100 ml-20 py-1">
                <input
                  type="text" placeholder="Phone(digits only)"
                  className={`w-150 border py-2 pl-3 pr-10 border-black/40 mx-2 outline-none ${errors.email ? 'border-2 border-red-500' : ' border border-green-700'
                    }`}
                  {...register("phone", {

                    required: "phone number is required",
                    minLength: {
                      value: 10,
                      message: "your phone number must be at least 10 digits",
                    },
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: 'Phone number must be between 10 and 15 digits'
                    }

                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.phone.message}
                  </p>
                )}
              </div>


              <div className=" w-100 ml-22 py-1">
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className={`w-4 h-4 border border-black/40 p-2 mx-2 outline-none ${errors.email ? 'border-2 border-red-500' : ' border border-green-700'
                      }`}
                    {...register("agree", {
                      required: "check on the rules",
                    })}
                  />
                  <span className="text-sm text-black">
                    I agree to the terms and rules
                  </span>
                </div>
                {errors.agree && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.agree.message}
                  </p>
                )}
              </div>


              <div className=" w-100 m-auto py-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full p-3 text-white border-none rounded-sm ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'} ${isSubmitting ? 'bg-[#ccc] cursor-not-allowed' : 'bg-blue-900 cursor-pointer'
                    }`}
                >
                  {isSubmitting ? 'Registering...' : 'Register'}
                </button>

              </div>
            </form>
          </div>

        </div>
      </div>

    </>
  )
}