'use client';

import { auth } from '../page';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

function handleSubmit() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // redirect to profile or something similar
        console.log(userCredential);
    }).catch((e) => {
        console.log(e);
    });
}

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
                <button onClick={handleSubmit}>Submit</button>
            </div>
        );
    } else {
        return (
            <p>{user.email}</p>
        );
    }
};
