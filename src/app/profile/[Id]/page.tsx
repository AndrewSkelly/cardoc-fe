'use client';

import { auth } from '../../page';
import { useAuthState } from 'react-firebase-hooks/auth';
import { handleDeleteUser } from '@/functions/handleDeleteUser';

// Checks to see if parameter value is equal to displayname which will show profile details if tre
export default function Page({ params }: { params : { Id: string } }) {
    const [user] = useAuthState(auth);
    if (params.Id == user?.displayName) {
    return (
        <>
            <p>User Details</p>
            <p>{params.Id}</p>
            <p>{user?.email}</p>
            <p>{user?.displayName}</p>
            <p>{user?.uid}</p>
            <button onClick={handleDeleteUser} className="rounded-full m-2 pl-5 pr-5 pt-2 pb-2 text-sm font-bold text-white bg-red-500 transition duration-300 ease-out hover:border-red-400 border-solid border-4">
                Delete Account
            </button>

            <p>My Cars <b>Number of Cars in pill</b></p>
            <p>List of cars in table / no Cars to display encourage to add car to get started</p>
            <p>Add, edit, delete Car</p>

        </>
    )
} else {
    return (
        <><p>No Display Name for :{params.Id}</p><p>{user?.displayName}</p></>
    )
}
};