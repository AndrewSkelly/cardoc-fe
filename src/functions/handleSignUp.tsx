import { auth } from '../app/page';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, confirmPasswordReset, updateProfile } from "firebase/auth";

// Function to create a firebase email user, also updates profile with display name
function handleSignUp() {
    const displayName = (document.getElementById('username') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // redirect to profile or something similar maybe Profle
        updateProfile(userCredential.user, {displayName})
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

export { handleSignUp }