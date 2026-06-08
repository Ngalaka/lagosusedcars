"use client"
import React, { useState, useMemo } from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TiStarburstOutline } from "react-icons/ti";
import { LuUsers } from "react-icons/lu";
import Image from "next/image";
import { addCars } from "@/lib/addCars";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { typeCar } from "@/lib/typeCar";
import { AiTwotoneMail } from "react-icons/ai";
import { FiPhoneIncoming } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { testimony } from "@/lib/testimony";
import { logoCars } from "@/lib/logocar";
import ThemeButton from "@/component/ThemeButton";

export default function page() {
  // Access the current theme from the ThemeContext
  const { theme } = useTheme();
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
      price: 150000,
      location: "Lagos",
      image: "/image/nissan.jfif"
    },
    {
      id: 2,
      make: "Toyota",
      model: "Corolla",
      year: 2025,
      body: "Sedan",
      transmission: "Manual",
      fuel: "Petrol",
      price: 3000000,
      location: "Lagos",
      image: "/image/nissan.jfif"
    },
    {
      id: 3,
      make: "Toyota",
      model: "Prius",
      year: 2020,
      body: " Liftback",
      transmission: "Automatic",
      fuel: "Petrol",
      price: 18000000,
      location: "Abuja",
      image: "/image/nissan.jfif"
    },
    {
      id: 4,
      make: "Honda",
      model: "Civic",
      year: 2019,
      body: "Sedan",
      transmission: "Manual",
      fuel: "Petrol",
      price: 12000000,
      location: "Lagos",
      image: "/image/nissan.jfif"
    },

    {
      id: 5,
      make: "Toyota",
      model: "Avalon",
      year: 2022,
      body: "Sedan",
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
      transmission: "Manual",
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
      transmission: "Manual",
      fuel: "Petrol",
      price: 2000000,
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
  const [minPrice, setMinPrice] = useState(5000000);
  const [maxPrice, setMaxPrice] = useState(65000000);
  const [make, setMake] = useState("Toyota");
  const [bodyType, setBodyType] = useState("Sedan");
  const [transmission, setTransmission] = useState("Automatic");
  const [fuelType, setFuelType] = useState("Petrol");


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
               <Link href="/sign-in">
              <span className='cursor-pointer'> <LuUsers /></span>
               </Link>
               <Link href="/sign-up">
              <p className='text-sm cursor-pointer py-2  '>
                Login</p>
                </Link>
            </div>

{/* Theme Toggle Button */}
            <div>
              <ThemeButton className="bg-blue-900 text-white px-4 py-2 rounded" />
            </div>

            <div>
              <button className='bg-blue-900 w-28 py-2  text-white text-sm cursor-pointer rounded-lg'>Sell Your Car</button>
            </div>
          </div>
        </div>
      </div>


      {/* Main Program*/}
{/* Theme Toggle Button */}
      <main
        className={`min-h-screen ${theme === "dark"
            ? "bg-black text-white"
            : "bg-white text-black"
          }`}
      >
        {/* Hero Sectiom */}
        <div className="relative h-screen  w-full  bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/image/carBg6.jfif')" }}>

          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex justify-around items-center">

            {/* card for logos platform */}
            <div className=' w-160 py-16 px-16  text-white '>
              <p className='text-7xl  py-4'>Logos #1 Platform to Buy & Sell Used Cars </p>
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
                          <Image
                            src={car.image}
                            alt={`${car.make} ${car.model}`}
                            width={300}
                            height={300}
                            className="w-4 h-4 object-cover rounded-xl bg-slate-100 mr-3"
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
                  <button className="w-full bg-blue-900 hover:bg-[#16186b] cursor-pointer text-white font-semibold py-4 px-4 rounded-2xl transition-colors shadow-md flex items-center justify-center text-md mb-4">
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


        {/* Featured Cars */}

        <div className="w-full h-auto ">

          {/* Recently car */}
          <div className="w-full flex flex-row justify-between items-center px-16 py-4">
            <p className="text-xl font-bold">Featured Cars for sale</p>
            <div className="flex flex-row items-center gap-2">
              <p className="cursor-pointer">View all</p>
              <span><IoIosArrowRoundForward /></span>
            </div>
          </div>


          {/* acarosel codes */}
          <div>
            <Swiper
              // modules={[Navigation, Pagination, Autoplay]}
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={5}
              // navigation
              // pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={false}
              // loop={true}
              className="overflow-hidden"
            >

              {/* addCars  */}

              <div className="w-70 h-auto flex flex-row justify-between items-center gap-2  ">

                {addCars.map((car) => (
                  < SwiperSlide key={car.id} >
                    <div className="border border-black/10 py-3 px-3">
                      <div>
                        <Image src={car.image} width={300} height={300} alt='Lagos used cars' className="w-full h-30 object-cover" />
                      </div>
                      <div>
                        <p >{car.useBy}</p>
                        < p className="font-bold text-sm py-1">{car.model}</p>
                        <div className='flex flex-row items-center gap-2 text-black/50 text-sm'>
                          <p >{car.fuel}</p>
                          <p>{car.body}</p>
                          <p>{car.year}</p>
                        </div>
                        <div className="flex justify-between items-center gap-16">
                          <div className="flex flex-row items-center gap-2 text-black/50">
                            <span className="text-sm"><CiLocationOn /></span>
                            <p >{car.location}</p>
                          </div>
                          <p className="font-semibold text-sm">{car.price}</p>
                        </div>
                      </div>
                    </div>

                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>


          {/* Browse Car by Brand */}

          <div>

            {/* Browse Car by Brand */}
            {/* browse car by Type */}
            <div className="w-full flex flex-row justify-between items-center px-16 py-4">
              <div className="w-full flex flex-row justify-between items-center  py-4">
                <p className="text-xl font-bold">Browse Car Types in Nigeria</p>
                <div className="flex flex-row items-center gap-2">
                  <p className="cursor-pointer">View all</p>
                  <span><IoIosArrowRoundForward /></span>
                </div>
              </div>
            </div>

            {/* types */}

            <div className="w-full h-auto flex flex-row justify-start items-center gap-4 px-16 py-2">
              {logoCars.map((logo) => (
                <div key={logo.id} >
                  <div className="w-50 h-30 border border-black/10 flex flex-col justify-center items-center gap-2 py-2 px-2">
                    <Image src={logo.logo} width={100} height={100} alt="Lagos used cars" className="w-20 h-20 object-cover" />
                    <p>{logo.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Browse Car by Type in Nigeria */}
          <div className="w-full h-auto mt-8">
            {/* browse car by Type */}
            <div className="w-full flex flex-row justify-between items-center px-16 py-4">
              <div className="w-full flex flex-row justify-between items-center  py-4">
                <p className="text-xl font-bold">Browse Car Types in Nigeria</p>
                <div className="flex flex-row items-center gap-2">
                  <p className="cursor-pointer">View all</p>
                  <span><IoIosArrowRoundForward /></span>
                </div>
              </div>
            </div>

            {/* types */}

            <div className="w-full h-auto flex flex-row justify-start items-center gap-4 px-16 py-2">
              {typeCar.map((type) => (
                <div key={type.id} >
                  <div className="w-50 h-30 border border-black/10 flex flex-col justify-center items-center gap-2 py-2 px-2">
                    <Image src={type.logo} width={300} height={300} alt="Lagos used cars" className="w-30 h-30 object-cover" />
                    <p>{type.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/*  Section to add cars */}
        <div className="w-full h-auto mt-8">

          <div className="w-full h-auto bg-blue-900 flex flex-row justify-center items-center">
            <div className="w-[60%] h-auto flex flex-col justify-center items-start gap-4 py-4 px-8 bg-blue-900">
              <h1 className="text-3xl font-bold text-white py-4 px-2">Drive Now, Pay Later</h1>
              <div className="w-[50%] h-auto py-4 px-2">
                <p className="text-white/80 font-light text-sm">Get your dream car today and pay later with our flexible financing options.Low
                  deposit,easy monthly payments,no hidden charges pre-qualify in 2 minutes!
                </p>
              </div>

              <div>
                <button className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-full cursor-pointer transition-colors hover:bg-blue-700 border border-white flex justify-center items-center gap-2">
                  <p>Check Your Eligibility</p>
                  <span className="text-xl text-white font-normal ml-1"><MdOutlineArrowRightAlt /></span>
                </button>
              </div>
            </div>

            <div className="w-[40%]">
              <Image src="/image/indivialcar.jpeg" width={400} height={400} alt="Lagos used cars " className="w-full h-[270px] object-cover" />
            </div>
          </div>



          {/* Recently car */}
          <div className="w-full flex flex-row justify-between items-center px-16 py-4">
            <p className="text-xl font-bold">Recently Added Cars</p>
            <div className="flex flex-row items-center gap-2">
              <p className="cursor-pointer">View all</p>
              <span><IoIosArrowRoundForward /></span>
            </div>
          </div>



          {/* acarosel codes */}
          <div className="w-full h-auto flex flex-row justify-center items-center px-8 py-2 gap-4 ">
            <Swiper
              // modules={[Navigation, Pagination, Autoplay]}
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={5}
              // navigation
              // pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={false}
              // loop={true}
              className="overflow-hidden"
            >

              {/* addCars  */}

              <div className="w-70 h-auto flex flex-row justify-between items-center gap-2  ">

                {addCars.map((car) => (
                  < SwiperSlide key={car.id} >
                    <div className="border border-black/10 py-3 px-3">
                      <div>
                        <Image src={car.image} width={300} height={300} alt='Lagos used cars' className="w-full h-30 object-cover" />
                      </div>
                      <div>
                        <p >{car.useBy}</p>
                        < p className="font-bold text-sm py-1">{car.model}</p>
                        <div className='flex flex-row items-center gap-2 text-black/50 text-sm'>
                          <p >{car.fuel}</p>
                          <p>{car.body}</p>
                          <p>{car.year}</p>
                        </div>
                        <div className="flex justify-between items-center gap-16">
                          <div className="flex flex-row items-center gap-2 text-black/50">
                            <span className="text-sm"><CiLocationOn /></span>
                            <p >{car.location}</p>
                          </div>
                          <p className="font-semibold text-sm">{car.price}</p>
                        </div>
                      </div>
                    </div>

                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>






        {/* Testimony section */}

        <div className="w-full h-auto">


          <div className="w-full flex flex-row justify-between items-center px-16 py-4">
            <p className="text-xl font-bold">What our Customers Say</p>
            <div className="flex flex-row items-center gap-2">
              <p>Write a Review</p>
              <span><IoIosArrowRoundForward /></span>
            </div>
          </div>


          {/* acarosel codes */}

          <Swiper
            // modules={[Navigation, Pagination, Autoplay]}
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            // navigation
            // pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={false}
            className="overflow-hidden"
          >

            {/* addCars  */}

            <div className=" w-[80%] h-auto flex flex-row justify-between items-center gap-2 border">
              {testimony.map((testi) => (

                < SwiperSlide key={testi.id} >
                  <div className="border  border-black/10 py-3 px-3">
                    <div className="h-20 w-full flex items-center justify-center text-center text-sm text-black/50">
                      <p >{testi.testi}</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 py-2 px-2'>
                      <Image src={testi.image} width={300} height={300} alt="Lagos used cars" className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="font-bold">{testi.name}</p>
                        <p className="text-sm text-black/50">{testi.model}</p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}

            </div>
          </Swiper>
        </div>


        <div className="w-full h-auto bg-blue-900 py-2 mt-8">

          <div className="w-full flex flex-row justify-between items-center px-16 py-4">
            <h2 className="text-xl font-bold text-white">What Our Customers Say</h2>
            <p className="text-sm text-white py-2 px-4  cursor-pointer">view all videos </p>
          </div>

          {/* speedometer image */}
          <div className="w-full h-auto flex flex-row justify-center items-center px-8 py-2 gap-4 text-white">
            <div>
              <Image src="/image/carspeedometer.jpeg" width={300} height={300} alt="Lagos used cars" className="w-full h-30 object-cover" />
              <div className="w-full h-auto flex flex-col justify-center items-center gap-2 bg-blue-700">
                <p className="text-center text-sm text-white px-4 font-bold">How to spot a good Tokunbo Car in Lagos</p>
                <div className="flex flex-row items-center justify-center gap-2">
                  <span>21,0000</span>
                  <span className="text-sm text-white/80 font-light ml-2">views</span>
                  <span className="text-sm text-white/80 font-light ml-2">-</span>
                  <span className="text-sm text-white/80 font-light ml-2">2 months ago</span>
                </div>
              </div>
            </div>

            <div>
              <Image src="/image/carspeedometer.jpeg" width={300} height={300} alt="Lagos used cars" className="w-full h-30 object-cover" />
              <div className="w-full h-auto flex flex-col justify-center items-center gap-2 bg-blue-700">
                <p className="text-center text-sm text-white  px-4 font-bold">How to spot a good Tokunbo Car in Lagos</p>
                <div className="flex flex-row items-center justify-center gap-2">
                  <span>21,0000</span>
                  <span className="text-sm text-white/80 font-light ml-2">views</span>
                  <span className="text-sm text-white/80 font-light ml-2">-</span>
                  <span className="text-sm text-white/80 font-light ml-2">2 months ago</span>
                </div>
              </div>
            </div>

            <div>
              <Image src="/image/carspeedometer.jpeg" width={300} height={300} alt="Lagos used cars" className="w-full h-30 object-cover" />
              <div className="w-full h-auto flex flex-col justify-center items-center gap-2 bg-blue-700">
                <p className="text-center text-sm text-white  px-4">How to spot a good Tokunbo Car in Lagos</p>
                <div className="flex flex-row items-center justify-center gap-2">
                  <span>21,0000</span>
                  <span className="text-sm text-white/80 font-light ml-2">views</span>
                  <span className="text-sm text-white/80 font-light ml-2">-</span>
                  <span className="text-sm text-white/80 font-light ml-2">2 months ago</span>
                </div>
              </div>
            </div>
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


      </main>
    </>
  )
}
