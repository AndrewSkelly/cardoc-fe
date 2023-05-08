import Image from 'next/image'
import Link from 'next/link'
import CarDocLogo from '../../public/CarDocLogo.svg'

export default function Navbar() {
    return (
        <div className="container mx-auto">
            <nav className='flex justify-between items-center bg-gray-200 px-8 py-2 w-full'>
                <div>
                    <Image src={CarDocLogo} alt='logo' width={200}></Image>
                </div>
                <div>
                    <Link href="#" className="p-4 text-lg font-bold text-gray-800">Services</Link>
                    <Link href="cars" className="p-4 text-lg font-bold text-gray-800">Cars</Link>
                    <Link href="#" className="p-4 text-lg font-bold text-gray-800">About</Link>
                    <Link href="#" className="p-4 text-lg font-bold text-gray-800">Contact</Link>
                </div>
                <div>
                    <Link href="#" className="rounded-full m-2 pl-5 pr-5 pt-2 pb-2 text-sm font-bold text-white bg-purple-500">Log In</Link>
                    <Link href="#" className="rounded-full m-2 pl-5 pr-5 pt-2 pb-2 text-sm font-bold text-white bg-purple-500">Sign Up</Link>
                </div>
            </nav>
        </div>
    )
}
