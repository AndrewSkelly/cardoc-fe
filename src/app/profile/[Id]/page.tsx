'use client';

import { auth } from '../../page';
import { useAuthState } from 'react-firebase-hooks/auth';
import { handleDeleteUser } from '@/functions/handleDeleteUser';
import cars from '../../../../public/cars.png';
import car from '../../../../public/car.png';
import cardelete from '../../../../public/car-delete.png';
import remove from '../../../../public/remove.png';
import Image from 'next/image';

// Checks to see if parameter value is equal to displayname which will show profile details if tre
export default function Page({ params }: { params: { Id: string } }) {
    const [user] = useAuthState(auth);
    if (params.Id == user?.displayName) {
        return (
            <>
                <div className="container mx-auto p-16">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow p-4 col-span-2">
                            <h2 className="text-lg font-medium mb-2">Account Details</h2>
                            <p className="font-medium">User ID: <span className="text-slate-500">{user?.uid}</span></p>
                            <p className="font-medium">Display Name: <span className="text-slate-500">{user?.displayName}</span></p>
                            <p className="font-medium">Email: <span className="text-slate-500">{user?.email}</span></p>
                            <button className="rounded-xl m-2 pl-5 pr-5 pt-2 pb-2 text-sm font-bold text-white bg-indigo-400 transition duration-300 ease-out hover:border-indigo-300 border-solid border-4">
                                <Image src={cars} alt='logo' width={32} /> My Cars
                            </button>
                            <button className="rounded-xl m-2 pl-5 pr-5 pt-2 pb-2 text-sm font-bold text-white bg-green-400 transition duration-300 ease-out hover:border-green-300 border-solid border-4">
                                <Image src={car} alt='logo' width={32} /> Add Car
                            </button>
                            <button className="rounded-xl m-2 pl-5 pr-5 pt-2 pb-2 text-sm font-bold text-white bg-red-500 transition duration-300 ease-out hover:border-red-400 border-solid border-4">
                                <Image src={cardelete} alt='logo' width={32} /> Delete Car
                            </button>
                            <button onClick={handleDeleteUser} className="rounded-xl m-2 pl-5 pr-5 pt-2 pb-2 text-sm font-bold text-white bg-red-500 transition duration-300 ease-out hover:border-red-400 border-solid border-4">
                                <Image src={remove} alt='logo' width={32} /> Delete Account
                            </button>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4">
                            <h2 className="text-lg font-medium mb-2">Add Your Car</h2>
                            <p className="text-gray-600">Add one of your cars to begin tracking and viewing its maintainability scores</p>

                            <div className="flex items-center justify-between mt-4">
                                <div className="relative w-full">
                                    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-between">
                                        <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                                        <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                                        <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                                    </div>
                                    <div className="relative h-1 bg-gray-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4">
                            <h2 className="text-lg font-medium mb-2">Add Your Car</h2>
                            <p className="text-gray-600">Suspendisse semper ex eu nisl elementum, sit amet lacinia velit eleifend. Ut at lobortis enim, id rutrum ex. Maecenas varius ex quis neque iaculis, in tincidunt justo congue.</p>

                            <div className="flex flex-col items-center justify-between mt-4 h-full">
                                <div className="relative">
                                    <div className="absolute top-0 bottom-0 left-0 flex flex-col items-center justify-between">
                                        <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                                        <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                                        <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                                    </div>
                                    <div className="relative w-1 h-full bg-gray-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p>{params.Id}</p>

                <p>My Cars <b>Number of Cars in pill</b></p>
                <p>List of cars in table / no Cars to display encourage to add car to get started</p>
                <p>Add, edit, delete Car</p> */}

            </>
        )
    } else {
        return (
            <><p>No Display Name for :{params.Id}</p><p>{user?.displayName}</p></>
        )
    }
};