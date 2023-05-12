'use client';

import Image from 'next/image';
import { auth } from '../page';
import { useAuthState } from 'react-firebase-hooks/auth';
import signup from '../../../public/signup.png';
import mail from '../../../public/mail.png';
import password from '../../../public/password.png';
import signupbackground from '../../../public/signupbackground.png';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, confirmPasswordReset, updateProfile } from "firebase/auth";
import { useRef, MutableRefObject } from 'react';

export default function Signup() {
    const [user] = useAuthState(auth);
    const displayNameRef: MutableRefObject<any> = useRef(null);
    const emailRef: MutableRefObject<any> = useRef(null);
    const passwordRef: MutableRefObject<any> = useRef(null);
    if (!user) {
        return (
            <>
                <div>
                    <Image src={signupbackground} alt='logo' />
                    <div className="flex justify-between items-center container mx-auto w-6/12 h-96 rounded-xl rounded-ee-3xl p-16 bg-indigo-400 mt-28 filter drop-shadow-angle border-indigo-300 border-solid border-4 absolute top-1/4 left-1/4">
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col items-start mb-4">
                                <label className="text-white mb-2">
                                    <Image src={mail} alt="logo" width={32} height={32} />
                                    <input
                                        className="bg-gray-200 rounded-md p-2 ml-2 text-black"
                                        placeholder="johndoe43"
                                        id="username"
                                        type="text"
                                        ref={displayNameRef} />
                                </label>
                                <label className="text-white mb-2">
                                    <Image src={mail} alt="logo" width={32} height={32} />
                                    <input
                                        className="bg-gray-200 rounded-md p-2 ml-2 text-black"
                                        placeholder="example@gmail.com"
                                        id="email"
                                        type="email"
                                        ref={emailRef} />
                                </label>
                                <label className="text-white mb-2">
                                    <Image src={password} alt="logo" width={32} height={32} />
                                    <input
                                        className="bg-gray-200 rounded-md p-2 ml-2 text-black"
                                        placeholder="pass1234"
                                        id="password"
                                        type="password"
                                        ref={passwordRef} />
                                </label>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="bg-gray-200 px-4 py-2 rounded-md"
                                    onClick={handleSignUp}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div className="w-4/12">
                            <Image src={signup} alt="logo" width={1000} height={1000} />
                        </div>
                    </div>
                </div></>
        );
    } else {
        return (
            <p>{user.email}</p>
        );
    }
    function handleSignUp() {
        const displayName = displayNameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // redirect to profile or something similar maybe Profle
            updateProfile(userCredential.user, { displayName })
            console.log(userCredential);
        }).catch((e) => {
            console.log(e);
        });


        // const actionCodeSettings = {
        //     url: 'http://localhost:3000/profile/?email=user@example.com',
        //   };

        // await sendPasswordResetEmail(auth, email, actionCodeSettings)

        // await confirmPasswordReset('user@example.com', code, newPassword);
    }
};
