'use client';

import Link from "next/link";
import React, { useState } from "react";

export default function Login() {
  const [username,setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = (e:React.FormEvent) => {
    e.preventDefault();
    console.log("新規登録:", username, password);
  };
   return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form 
        onSubmit={handleLogin}
        className="w-full max-w-sm space-y-6 bg-white shadow-md p-8 rounded-xl"
      >
        <h2 className="text-2xl font-bold mb-4">新規登録</h2>

        <div>
          <label className="block mb-1 text-gray-700">ユーザー名</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">メールアドレス</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>
      <Link href="/dashboard">
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600">
          登録
        </button>
      </Link>
      </form>
    </div>
  );
}