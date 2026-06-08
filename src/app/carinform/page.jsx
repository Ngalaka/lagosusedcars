"use client"
import { carsvaritie } from '@/lib/carsvaritie'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { IoCarSportOutline } from 'react-icons/io5'
import { LuUsers } from 'react-icons/lu'
import { TiStarburstOutline } from 'react-icons/ti'
import { CiCircleCheck } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { BiAbacus } from "react-icons/bi";
import { BiBrightnessHalf } from "react-icons/bi";
import { BiColor } from "react-icons/bi";
import { CiPen } from "react-icons/ci";
import { CiKeyboard } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { DiJoomla } from "react-icons/di";
import { DiYii } from "react-icons/di";
import { DiBrackets } from "react-icons/di";
import { DiDatabase } from "react-icons/di";

export default function page() {
  return (
    <>
      <div>
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


      {/* main content */}

      <div className='w-full h-auto flex  justify-center items-center gap-4 p-4 '>
        {/* Cars Section images and price */}
        <div className='w-[65%] h-auto relative'>
          {/* Background Image */}
          <Image
            src="/image/carBg3.jfif"
            alt="lagos used cars"
            priority
            width={300}
            height={300}
            className="object-cover w-full h-175 "
          />

          {/* Dark Overlay */}
          <div className="absolute w-full  bg-black/10"></div>

          {/* Hero Content */}
          <div className="absolute w-full h-full inset-0 flex  justify-start items-start gap-6 px-10 py-8">

            {/* Tokunbo */}
            <div>
              <Link
                href="/tokunbo-cars"
                className="inline-block bg-blue-900 w-40 py-2 text-center text-white text-sm rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
              >
                Tokunbo Cars
              </Link>
            </div>
            {/* Deal of  the day */}

            <div>
              <Link
                href="/tokunbo-cars"
                className="inline-block bg-blue-900 w-40 py-2 text-center text-white text-sm rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
              >
                Tokunbo Cars
              </Link>
            </div>
          </div>

          {/* car Information  */}

          <div className='w-full h-auto'>
            <div className='w-70 h-auto flex flex-col items-center py-12 mx-20 '>
              <h1 className='text-xl font-bold'>2018  Toyota Camry SE</h1>
              <div className='flex justify-center items-center gap-4'>
                <h1 className='text-2xl font-bold text-blue-950'>N18,500,000</h1>
                <p>N21,000,000</p>
              </div>
            </div>

            {/* car attribute */}
            <div className='w-[80%] h-auto mx-auto flex justify-round items-between gap-3 space-y-2 py-4'>
              <span className='border border-black/20 w-35.5 h-auto text-center py-2 px-2 flex flex-col gap-2 bg-gray-50 rounded-lg'>Tokurbo</span>
              <span className='border border-black/20 w-35.5 h-auto text-center py-2 px-2 flex flex-col gap-2 bg-gray-50 rounded-lg'>Sedan</span>
              <span className='border border-black/20 w-35.5 h-auto text-center py-2 px-2 flex flex-col gap-2 bg-gray-50 rounded-lg'>Petrol</span>
              <span className='border border-black/20 w-35.5 h-auto text-center py-2 px-2 flex flex-col gap-2 bg-gray-50 rounded-lg'>Automatic</span>
              <span className='border border-black/20 w-35.5 h-auto text-center py-2 px-2 flex flex-col gap-2 bg-gray-50 rounded-lg'>Verified</span>
              <span className='border border-black/20 w-35.5 h-auto text-center py-2 px-2 flex flex-col gap-2 bg-gray-50 rounded-lg'>Lekki Lagos</span>
            </div>


            {/* Detains and information of car */}

            <div className='w-[80%] h-auto mx-auto grid grid-cols-4 gap-3 py-12 '>
              {/* gride information of the car */}
              <div className=' w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><BiAbacus size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>2019</span>
                <span className='text-black/40'>Year</span>
              </div>

              <div className=' w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><BiBrightnessHalf size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>47,000</span>
                <span className='text-black/40'>Mileage</span>
              </div >


              <div className=' w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><DiJoomla size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>Petrol</span>
                <span className='text-black/40'>Fuel type</span>
              </div>

              <div className=' w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><CiBoxes size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>2.5L V4</span>
                <span className='text-black/40'>Engine</span>
              </div>

              <div className=' w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><CiCoffeeCup size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>Pearl White</span>
                <span className='text-black/40'>Colour</span>
              </div>


              <div className=' w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><CiKeyboard size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>4 doors</span>
                <span className='text-black/40'>Door</span>
              </div>


              <div className=' w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><CiPen size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>5 seats</span>
                <span className='text-black/40'>Seats</span>
              </div>


              <div className=' w-35.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><BiColor size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>USA</span>
                <span className='text-black/40'>Imported From</span>
              </div>
            </div>



          </div>





        </div>









        {/* Cars Section instructions/command */}

        <div className='w-[30%] h-auto'>


          {/* users contact */}
          <div className='flex flex-col items-center'>
            {/* Contact Seller */}
            <Link href="#">
              <button className="w-90 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
                Contact Seller
              </button>
            </Link>
          </div>


          {/* Generate Report */}

          <div className='flex flex-col items-center py-2'>
            {/* Contact Seller */}
            <Link href="#">
              <button className="w-90 px-4 py-2 bg-gray-300 text-blue-900 rounded-lg hover:bg-gray-500 cursor-pointer">
                Generate Report
              </button>
            </Link>
          </div>

          {/* Schedule Inspection */}
          <div className='flex flex-col items-center py-2'>
            {/*  Schedule Inspection  */}
            <Link href="#">
              <button className="w-90 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-500 cursor-pointer">
                Schedule Inspection
              </button>
            </Link>
          </div>

          {/* Buy Now */}
          <div className='flex flex-col items-center py-2'>
            {/* Buy Now */}
            <Link href="#">
              <button className="w-90 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-500 cursor-pointer">
                Buy Now
              </button>
            </Link>
          </div>

          {/* Seller Information */}
          <div className='w-full h-auto py-4'>
            <div className=' flex justify-between items-center gap-2 py-2'>
              <p>Seller Information </p>
              <span className='text-green-800' ><CiCircleCheck size={20} /></span>
            </div>

            {/* seller names and details */}
            <div className='flex justify-between items-center gap-4'>
              <div className='py-4' >
                <h1>Oluyinka Sola</h1>
                <p>Seller Performance</p>

                {/* shipping  */}
                <div className='py-8'>
                  {/* shipping speed */}
                  <div className='flex justify-center items-center gap-4 py-2'>
                    <span className='text-green-800'><FaRegStar size={20} strokeWidth={12.5} /></span>
                    <p>Shipping Speed:Excellent</p>
                  </div>

                  {/* Quality */}
                  <div className='flex justify-center items-center gap-4 py-2' >
                    <span className='text-green-800'><FaRegStar size={20} strokeWidth={12.5} /></span>
                    <p>Quality Score Excellent</p>
                  </div>

                  {/* Customer*/}
                  <div className='flex justify-center items-center gap-4 py-2'>
                    <span><FaRegStar size={20}  /></span>
                    <p>Customer Rating Good</p>
                  </div>


                </div>
              </div>

              {/* can listed */}
              <div className='flex flex-col items-center gap-4'>
                {/* Car listed */}

                <div className='border border-black/10 py-4 text-center w-20'>
                  <p className='text-xl font-semibold '>32</p>
                  <span className='text-sm text-black/40'>Car Listed</span>
                </div>

                {/* Response rate */}

                <div className='border border-black/10 py-4 text-center w-20'>
                  <p className='text-xl font-semibold '>100</p>
                  <span className='text-sm text-black/40'>Response rate</span>
                </div>
              </div>
            </div>

            {/* Buyer Protection */}

            <div className='w-full h-auto py-12 bg-gray-50'>
              <div className='bg-white'>
              <h1 className='text-2xl font-bold px-8 py-4'>Buyer Protection</h1>

              <div>
                {/* all buyer protection */}

                <div className='flex justify-between items-center gap-4 py-4 my-2 border border-black/10'>
                  <span className=' bg-blue-300 mx-8 '><DiDatabase size={30}/></span>
                  <div>
                    <p className='font-bold'>All transactions are plateform-managed</p>
                    <p className='text-sm text-center text-black/40 '>No direct money exchange outside lagosUsedCars</p>
                  </div>
                </div>

                <div  className='flex justify-between items-center gap-4 py-2 my-2 border border-black/10'>
                  <span className=' bg-blue-300 mx-8  '><DiBrackets size={30} /></span>
                 <div>
                    <p className='font-bold'>All transactions are plateform-managed</p>
                    <p className='text-sm text-center text-black/40 '>No direct money exchange outside lagosUsedCars</p>
                  </div>
                </div>

                <div  className='flex justify-between items-center gap-4 py-2 border border-black/10'>
                  <span className=' bg-blue-300 mx-8  '><DiYii size={30} /></span>
                 <div>
                    <p className='font-bold'>All transactions are plateform-managed</p>
                    <p className='text-sm text-center text-black/40'>No direct money exchange outside lagosUsedCars</p>
                  </div>
                </div>
              </div>
              </div>
            </div>

          {/* Listing details */}

          <div className='w-full h-auto py-12 bg-gray-50'>
            <div className='bg-white mx-4'>
            <h1 className='text-2xl font-bold px-8 py-4'>Listing details</h1>

            <div className='flex justify-between items-center gap-4 py-2 px-8 '>
              <p className='text-md text-black/40 text-center'>Listed</p>
              <p className='font-bold text-md'>2 days ago</p>
            </div>

            <div className='flex justify-between items-center gap-4  py-2 px-8 '>
              <p className='text-md text-black/40 text-center'>Listing ID</p>
              <p className='font-bold text-md'>#LUC-2026-00481</p>
            </div>

            <div className='flex justify-between items-center gap-4  py-2 px-8 '>
              <p className='text-md text-black/40 text-center'>Location</p>
              <p className='font-bold text-md'>Lekki Phase 1, Lagos</p>
            </div>

            <div className='flex justify-between items-center gap-4  py-2 px-8 '>
              <p className='text-md text-black/40 text-center'>Views</p>
              <p className='font-bold text-md'>342 people viewed this</p>
            </div>
            </div>
          </div>


          {/* Drive Now, Pay Later */}

          <div className='bg-blue-950 rounded-lg w-full h-auto mx-auto py-12 text-white'>
            <h1 className=' text-3xl text-white font-bold px-4 '>Drive Now, Pay Later</h1>
            <p className='text-sm text-white/50 px-4 py-4'>
              Spread the cost with flexible financing,Low deposit, fixed monthly
              payments, no hidden charges
            </p>

            <div className='bg-blue-700 text-white rounded-lg py-4'>
              <div className='flex justify-between items-center gap-4 px-8'>
                <p>Car price</p>
                <p>N18,500,000</p>
              </div>

              <div  className='flex justify-between items-center gap-4 px-8'>
                <p>Est, deposit(20%)</p>
                <p>N18,500,000</p>
              </div>

              <div  className='flex justify-between items-center gap-4 px-8'>
                <p>Monthly payment</p>
                <p>N18,500,000</p>
              </div>

              <div  className='flex justify-between items-center gap-4 px-8'>
                <p>Loan term</p>
                <p>N18,500,000</p>
              </div>
            </div>

             <div className='py-4'>
                <button>
                  Check Eligibility
                <span>icons</span>
                </button>
              </div>

          </div>

          </div>
        </div>









        <div />

















      </div>

















    </>
  )
}
