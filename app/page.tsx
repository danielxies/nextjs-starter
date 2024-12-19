'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LandingPage() {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="absolute top-4 left-4 z-50">
        <Image src="/icon.png" alt="Apollo Project Icon" width={31} height={31} onClick={goHome}/>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-white">the clouds are falling</h1>
      </div>
    </div>
  );
}
