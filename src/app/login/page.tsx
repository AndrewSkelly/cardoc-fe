'use client';

import { handleLogin } from '@/functions/handleLogin';
import { auth } from '../page';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Login() {
    const [user] = useAuthState(auth);
    if (!user) {
        return (
            <div>
                <label>
                    Email:
                    <input placeholder='example@gmail.com' id="email" type="email" />
                </label>
                <label>
                    Password:
                    <input id='password' type="password" />
                </label>
                <button onClick={handleLogin}>Submit</button>
            </div>
        );
    } else {
        return (
            <p>{user.email}</p>
        );
    }
};
