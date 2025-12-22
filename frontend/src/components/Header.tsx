' use client';

import Link from "next/link";

export default function Header () {
  return(
    <header className=" fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4">
      <div>
        <h1 className="text-4xl font-bold pl-15">
          <Link href="/" className="text-gray-800">
            Tra<span className="text-[#00ff7f]">ckly</span>
          </Link>
        </h1>
      </div>
      <div className="flex justify-end items-start pr-40">
        <button className="py-1 px-5 bg-black rounded-2xl text-white font-black border-2 border-black -mt-10 hover:bg-gray-800">
          <Link href="/login" >
            <h1>Log In</h1>
          </Link>
        </button>
      </div>
      
      <div className="flex justify-end items-start pr-10">
        <button className="py-1 px-5 bg-white rounded-2xl text-black font-black border-2 border-black -mt-10 hover:bg-gray-200">
          <Link href="/signUp">
            <h1>Sign Up</h1>
          </Link>
        </button>
      </div>

    </header>
  )
}