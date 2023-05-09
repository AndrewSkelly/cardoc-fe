import { auth } from "@/app/page";
import { getAuth, deleteUser } from "firebase/auth";
const DeleteAccountButton = () => {
    const handleDeleteAccount = async () => {
        try {
            await auth.currentUser?.delete();
            console.log("User account deleted successfully!");
        } catch (error) {
            console.error("Error deleting user account: ", error);
        }
    };

    return (
        <>
        <p>ho</p>
        <button onClick={handleDeleteAccount}>
            Delete Account
        </button>
        </>
    );
};

export { DeleteAccountButton }