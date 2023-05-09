import { auth } from '../app/page';
import { createUserWithEmailAndPassword } from "firebase/auth";

function handleSignUp() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // redirect to profile or something similar maybe Profle
        console.log(userCredential);
    }).catch((e) => {
        console.log(e);
    });
}

export { handleSignUp }