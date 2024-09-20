import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  deleteUser,
} from "firebase/auth";

//* Firebase Signup
export async function signup(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    // logout();
    console.log("Successfully signed up");
    return userCredential;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}

//*Firebase Login
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

//* Firebase Logout
export async function logout() {
  try {
    await signOut(auth);
    console.log("Signing out successfully");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}

//* Firebase Reset Password
export async function resetPassword(email) {
  try {
    const resetPass = await sendPasswordResetEmail(auth, email);
    console.log("Successfully reset password");
    return resetPass;
  } catch (error) {
    console.log("Error reset password:", error);
    throw error;
  }
}

//* Firebase getAuthState
export function getAuthState(callback) {
  const getStatus = onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(`Successfully got user id: ${uid}`);
      callback(user);
    } else {
      console.log("Unable to get user status");
      callback(null); // or whatever you want to do when no user is signed in
    }
    return getStatus;
  });
}

//* Firebase Send Email Verification
export function sendVerification() {
  try {
    const sendVerification = sendEmailVerification(auth.currentUser);
    console.log("Successfully email verification");
    return sendVerification;
  } catch (err) {
    console.log("Error sending email verfication", err);
  }
}

export async function deleteAccount(user) {
  try {
    await deleteUser(user);
    console.log("Successfully deleted account");
  } catch (err) {
    console.log("Error deleting account", err);
  }
}
