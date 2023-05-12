'use client';

import { auth } from '../page';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from "firebase/auth";
import { MutableRefObject, useRef } from 'react';

export default function Login() {
    const [user] = useAuthState(auth);
    const emailRef: MutableRefObject<any> = useRef(null);
    const passwordRef: MutableRefObject<any> = useRef(null);
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
            </div>
        );
    } else {
        return (
            <p>{user.email}</p>
        );
    }
    function handleLogin() {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // redirect to profile or something similar
            console.log(userCredential);
        }).catch((e) => {
            console.log(e);
        });
    }
};
