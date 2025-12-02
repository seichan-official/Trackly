'use client';

export default function Footer(){
  return(
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-20">
  <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

    {/* 左側：ロゴ・名称 */}
    <div className="text-lg font-semibold">
      Trackly
    </div>

    {/* 真ん中：ナビゲーション（必要なければ削除OK） */}
    <nav className="flex gap-6 text-sm">
      <a href="#" className="hover:text-white transition">利用規約</a>
      <a href="#" className="hover:text-white transition">プライバシー</a>
      <a href="#" className="hover:text-white transition">お問い合わせ</a>
    </nav>

    {/* 右側：コピーライト */}
    <div className="text-sm text-gray-400">
      © {new Date().getFullYear()} Trackly. All rights reserved.
    </div>

  </div>
</footer>
  )
}