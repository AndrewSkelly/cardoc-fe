import { signOut } from 'firebase/auth';
import { auth } from '../app/page';

function handleSignOut() {
    
    signOut(auth).then(() => {
        // After signout, redirect the user to the signup page
        window.location.href = "/signup";
    }).catch((e) => {
        console.log(e);
    });
}

export { handleSignOut }
