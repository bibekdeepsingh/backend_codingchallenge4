import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

// Parse JSON credentials
const firebaseConfig = JSON.parse(process.env.FIREBASE_CREDENTIALS as string);

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
});


export default admin;
