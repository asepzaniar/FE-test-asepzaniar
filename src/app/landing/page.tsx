'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'


export default function LandingPage() {
  const [userName, setUserName] = useState('');
  const router = useRouter();
  useEffect(() => {
    const name = localStorage.getItem('user_name');
    if (name) setUserName(name);
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout');
    router.push('/login');
  };

 return (
  <main className="min-h-screen bg-white">
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-30">
      <div className="flex items-center space-x-6">
        <a href="/profile" className="text-[#658abd] font-semibold hover:underline font-ubuntu">Profile</a>
        <a href="/product" className="text-[#658abd] font-semibold hover:underline font-ubuntu">Product</a>
      </div>

      <div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition text-sm cursor-pointer"
        >
          Logout
        </button>
      </div>
    </header>

    <section className="px-6 py-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold font-ubuntu text-[#658abd]">
          Hallo{userName && `, ${userName}`}!
        </h1>
        <a
          href="/other"
          className="inline-block bg-[#658abd] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition font-ubuntu"
        >
          Jokes Today
        </a>
      </div>

      <div className="flex justify-center">
        <Image
          src="/img/working.gif"
          alt="Working"
          width={500}
          height={500}
          className="w-full max-w-lg h-auto z-10"
        />
      </div>
    </section>
  </main>
);
}
