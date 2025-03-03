import admin from "./config/firebase";

async function verifyFirebase() {
    const users = await admin.auth().listUsers();
    console.log("Firebase connected. Total users:", users.users.length);
}


verifyFirebase().catch(console.error);
