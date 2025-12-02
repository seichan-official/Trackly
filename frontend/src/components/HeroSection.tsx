'use client';

import Link from "next/link";
import SlideTitle from "@/components/SlideInText";
import SlideSubTitle from "@/components/SlideInText";
import SlideButton from "@/components/SlideInText";

export default function HeroSection() {
  return(
<section className="min-h-screen flex items-center justify-between px-20 pt-10">
  <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-xl space-y-6 pb-20">
          <SlideTitle>
          <h1 className="text-4xl font-bold pb-5 pl-5">
            報酬管理を、アップデートする。
          </h1>
          </SlideTitle>
          <SlideSubTitle delay={0.3}>
          <p className="text-2xl text-gray-600 pb-5 pl-20">
            もっと効率的に。もっとスマートに。
          </p>
          </SlideSubTitle>
          <Link href="/login">
            <SlideButton delay={0.5}>
            <button className="ml-48 mt-2 w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#3cb371] shadow-[inset_0px_-2px_0px_1px_#3cb371] group hover:bg-[#3cb371] transition duration-300 ease-in-out">
              <span className="font-medium text-[#333] group-hover:text-white">
                Go Trackly
              </span>
            </button>
            </SlideButton>
          </Link>
        </div>
  </div>
  <SlideTitle delay={0.5}>
  <div className="flex justify-end flex-1 pb-20">
    <img src="Image/delivery.jpg" alt="delivery" className="w-[600px] " />
  </div>
  </SlideTitle>
</section>
  )
}