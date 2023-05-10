'use client';

import Image from 'next/image';
import Link from 'next/link';
import CarDocLogo from '../../public/CarDocLogo.svg';
import { auth } from '../app/page';
import { useAuthState } from 'react-firebase-hooks/auth';
import { handleSignOut } from '@/functions/handleSignOut';

export default function Navbar() {
    const [user] = useAuthState(auth);
    const profileLink = `/profile/${user?.displayName}`;
    return (
        <div className="container mx-auto">
            <nav className='flex justify-between items-center bg-slate-100 px-8 py-2 w-full border-indigo-300 border-solid border-b-4'>
                <div>
                    <Link href="#">
                        <Image src={CarDocLogo} alt='logo' width={200}/ >
                    </Link>
                </div>
                <div>
                    <Link href="#" className="p-4 text-lg font-bold text-gray-800 tex">Services</Link>
                    <Link href="cars" className="p-4 text-lg font-bold text-gray-800">Cars</Link>
                    <Link href="about" className="p-4 text-lg font-bold text-gray-800">About</Link>
                    <Link href="#" className="p-4 text-lg font-bold text-gray-800">Contact</Link>
                </div>
                {
                    
                    user ?
                        <div>
                            <Link href={profileLink} className="rounded-full m-2 pl-5 pr-5 pt-2 pb-2 text-sm font-bold text-white bg-indigo-400 transition duration-300 ease-out hover:border-indigo-300 border-solid border-4">Profile</Link>
                            <Link href="#" onClick={handleSignOut} className="rounded-full m-2 pl-5 pr-5 pt-2 pb-2 text-sm font-bold text-white bg-indigo-400 transition duration-300 ease-out hover:border-indigo-300 border-solid border-4">Sign Out</Link>
                        </div>
                        :
                        <div>
                            <Link href="login" className="rounded-full m-2 pl-5 pr-5 pt-2 pb-2 text-sm font-bold text-white bg-indigo-400 transition duration-300 ease-out hover:border-indigo-300 border-solid border-4">Log In</Link>
                            <Link href="signup" className="rounded-full m-2 pl-5 pr-5 pt-2 pb-2 text-sm font-bold text-white bg-indigo-400 transition duration-300 ease-out hover:border-indigo-300 border-solid border-4">Sign Up</Link>
                        </div>
                }
            </nav>
        </div>
    );
}
