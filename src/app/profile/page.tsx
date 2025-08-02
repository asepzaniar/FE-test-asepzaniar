'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }

    fetch('/api/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        localStorage.setItem('user_name', data.name); 
      })
      .catch((err) => console.error('Error:', err));
  }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user_name');
//     window.location.href = '/login';
//   };

  if (!profile) return <p className="text-center mt-8">Loading...</p>;

  return (
    <main className="bg-white min-h-screen flex items-center justify-center">
      <header className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center">
        <div className="h-48 w-48 relative">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={192}
            height={192}
            className="h-48 w-48 rounded-full object-cover border-4 border-indigo-600 shadow-md"
          />
        </div>

        <h1 className="text-2xl text-gray-700 font-bold mt-4 font-ubuntu">My Name: {profile.name}</h1>
        <p className="text-gray-600 font-ubuntu">Email: {profile.email}</p>
        <p className="text-indigo-500 font-medium font-ubuntu">Role: {profile.role}</p>

        <button
          onClick={() => router.push('/landing')}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm font-medium font-ubuntu cursor-pointer"
        >
          Back to Page
        </button>
      </header>
    </main>
  );
}
