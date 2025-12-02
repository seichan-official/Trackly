'use client';

//import
import Image from "next/image";
import SlideTitle from "./SlideInText";
import SlideSubTitle from "./SlideInText";

export default function UnifySection(){
  return(
    <section className="
      min-h-screen
      flex flex-col md:flex-row
      items-center md:items-center
      justify-between
      px-10 md:px-20 
      py-20">

  {/* 左側：タイトル + テキスト */}
  <div className="flex-1 space-y-8 md:pr-10">
      <SlideTitle>
        <h1 className="text-4xl font-bold whitespace-nowrap pb-9">
          あなたの働き方はもっと最適化できます。
        </h1>
      </SlideTitle>

      <SlideSubTitle delay={0.3}>
        <p className="text-lg md:text-2xl text-gray-600 leading-relaxed">
          稼働時間と報酬を入力すると時給を知ることができます。<br />
          そうすることであなたの働き方はもっと最適化でき、
          データを基に戦略を立てられるため、生産性が大幅に向上します。
        </p>
      </SlideSubTitle>
  </div>

  {/* 右側：画像 */}
  <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
      <img 
        src="/image/up.jpg" 
        alt="up" 
        className="w-[260px] sm:w-[350px] md:w-[450px] lg:w-[550px]"
      />
  </div>

</section>
  )
}