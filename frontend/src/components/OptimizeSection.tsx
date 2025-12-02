'use client';

import Image from "next/image";

export default function OptimizeSection() {
  return(
<section className="flex items-start justify-center px-20 py-32 gap-20 mb-10">
  <div className="flex-1 flex justify-center -mt-15">
    <img src="/image/question.jpg" alt="question" className="w-[500px]" />
  </div>

  <div className="flex-1">
    <h1 className="text-4xl font-bold mr-4 mb-20 whitespace-nowrap">
      Tracklyは各報酬を一括管理できます。
    </h1>

    <p className="text-2xl text-gray-600 leading-relaxed ml-10">
      UberやWoltなどの各パートナーアプリにある<br />
      情報を一つに統合し、バラバラだった報酬管理を<br />
      Tracklyがまとめて行います。
    </p>
  </div>
</section>
  )
}