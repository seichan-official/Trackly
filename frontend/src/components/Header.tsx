' use client';

import Link from "next/link";

export default function Header () {
  return(
    <header className="mt-5">
      <div>
        <h1 className="text-4xl font-bold pl-15">
          <Link href="/" className="text-gray-800">
            Tra<span className="text-[#00ff7f]">ckly</span>
          </Link>
        </h1>
      </div>
      <div className="flex justify-end items-start pr-40">
        <button className="py-1 px-5 bg-black rounded-2xl text-white font-black border-2 border-black -mt-10 hover:bg-gray-800">
          <Link href="/SignIn" >
            <h1>Sign In</h1>
          </Link>
        </button>
      </div>
      
      <div className="flex justify-end items-start pr-10">
        <button className="py-1 px-5 bg-white rounded-2xl text-black font-black border-2 border-black -mt-10 hover:bg-gray-200">
          <Link href="/SignUp">
            <h1>Sign Up</h1>
          </Link>
        </button>
      </div>

    </header>
  )
}