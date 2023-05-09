'use client';

import { auth } from '../page';
import { useAuthState, useDeleteUser } from 'react-firebase-hooks/auth';
import { handleDeleteUser } from '@/functions/handleDeleteUser';

export default function Profile() {

    return (
        <>
            <p>ho</p>
            <button onClick={handleDeleteUser}>
                Delete Account
            </button>
        </>
    );
};
