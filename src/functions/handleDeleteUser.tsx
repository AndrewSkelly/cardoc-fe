import { auth } from "@/app/page";

async function handleDeleteUser() {
    try {
        await auth.currentUser?.delete();
        console.log("User account deleted successfully!");
    } catch (error) {
        console.error("Error deleting user account: ", error);
    }
}

export { handleDeleteUser }