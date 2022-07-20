import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyApkMJX7avCtN546kz9dDK-QemAJdFtFlU",
  authDomain: "login-dd2e8.firebaseapp.com",
  projectId: "login-dd2e8",
  storageBucket: "login-dd2e8.appspot.com",
  messagingSenderId: "770952885296",
  appId: "1:770952885296:web:fb064dfd4f5f8169bfe9f5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
