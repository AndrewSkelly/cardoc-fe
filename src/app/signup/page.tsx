'use client';

import Image from 'next/image';
import { auth } from '../page';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import signup from '../../../public/signup.png';
import mail from '../../../public/mail.png';
import password from '../../../public/password.png';

function handleSubmit() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // redirect to profile or something similar
        console.log(userCredential);
    }).catch((e) => {
        console.log(e);
    });
}

export default function Signup() {
    const [user] = useAuthState(auth);
    if (!user) {
        return (
            <div className="flex justify-between items-center container mx-auto w-6/12 h-96 rounded-xl rounded-ee-3xl p-16 bg-indigo-400 mt-28 filter drop-shadow-angle border-indigo-300 border-solid border-4">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col items-start mb-4">
                  <label className="text-white mb-2">
                  <Image src={mail} alt="logo" width={32} height={32}/>
                    <input
                      className="bg-gray-200 rounded-md p-2 ml-2"
                      placeholder="example@gmail.com"
                      id="email"
                      type="email"
                    />
                  </label>
                  <label className="text-white mb-2">
                  <Image src={password} alt="logo" width={32} height={32}/>
                    <input
                      className="bg-gray-200 rounded-md p-2 ml-2"
                      placeholder="pass1234"
                      id="password"
                      type="password"
                    />
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-gray-200 px-4 py-2 rounded-md"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="w-4/12">
                <Image src={signup} alt="logo" width={1000} height={1000}/>
              </div>
            </div>
          );
    } else {
        return (
            <p>{user.email}</p>
        );
    }
};
