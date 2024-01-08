import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
        <ul className="flex gap-2">
            <li>
                <Link href="/" className='font-bold font-orbitron text-2xl text-orange-800 hover:underline'>Indie gamer</Link>
            </li>
            <li className='ml-auto'>
                <Link href="/reviews" className='font-semibold text-orange-800 hover:underline'>Reviews</Link>
            </li>
            <li>
                <Link href="/about" className='font-semibold text-orange-800 hover:underline'>About</Link>
            </li>
        </ul>
    </nav>
  )
}