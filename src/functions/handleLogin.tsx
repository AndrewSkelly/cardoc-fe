import { auth } from "@/app/page";
import { signInWithEmailAndPassword } from "firebase/auth";

function handleLogin() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // redirect to profile or something similar
        console.log(userCredential);
    }).catch((e) => {
        console.log(e);
    });
}

export { handleLogin }