import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FB_API_KEY,
//   authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
//   projectId: process.env.REACT_APP_FB_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FB_APP_ID,
//   measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyDxDdR37S9uDumfADTd_lqy8KTBWGH1lsk",
  authDomain: "cardoc-2ab2b.firebaseapp.com",
  projectId: "cardoc-2ab2b",
  storageBucket: "cardoc-2ab2b.appspot.com",
  messagingSenderId: "950402761237",
  appId: "1:950402761237:web:54b116aae1253e1e9b041c",
  measurementId: "G-0S4J8RWBYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export default function Home() {
  return (
    <main>
      <p>home</p>
    </main>
  )
}

export { app, auth };