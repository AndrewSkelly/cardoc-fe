'use client';

import { auth } from '../page';
import { useAuthState, useDeleteUser } from 'react-firebase-hooks/auth';
import { DeleteAccountButton } from '@/functions/handleDeleteUser';

async function handleDeleteAccount() {
    try {
        await auth.currentUser?.delete();
        console.log("User account deleted successfully!");
    } catch (error) {
        console.error("Error deleting user account: ", error);
    }
}

export default function Profile() {

    return (
        <>
            <p>ho</p>
            <button onClick={handleDeleteAccount}>
                Delete Account
            </button>
        </>
    );
};
