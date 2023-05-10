'use client';

import { handleLogin } from '@/functions/handleLogin';
import { auth } from '../page';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MutableRefObject, useRef } from 'react';

export default function Login() {
    const emailRef: MutableRefObject<any> = useRef();
    const passwordRef: MutableRefObject<any> = useRef();
    function handleLogin1() {
        console.log(emailRef.current?.value);
        console.log(passwordRef.current?.value);
    }
    const [user] = useAuthState(auth);
    if (!user) {
        return (
            <div>
                <label>
                    Email:
                    <input placeholder='example@gmail.com' id="email" type="email" ref={emailRef} />
                </label>
                <label>
                    Password:
                    <input id='password' type="password" ref={passwordRef} />
                </label>
                <button onClick={handleLogin}>Submit</button>
                <button onClick={handleLogin1}>Test</button>
            </div>
        );
    } else {
        return (
            <p>{user.email}</p>
        );
    }
};
