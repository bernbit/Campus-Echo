import { firestore } from "./firebase";

import {
  setDoc,
  doc,
  getDoc,
  getDocs,
  collection,
  onSnapshot,
  updateDoc,
  deleteDoc,
  arrayUnion,
} from "firebase/firestore";

// export async function getUserData(uid) {
//   const postRef = doc(firestore, "users", uid);
//   const userSnap = await getDoc(postRef);

//   if (userSnap.exists()) {
//     return userSnap.data();
//   } else {
//     console.log("No such user data!");
//   }
// }

export async function getAllPostData(setUserData) {
  try {
    const postCollection = collection(firestore, "posts");

    // Initial data fetch
    const postSnapshot = await getDocs(postCollection);
    const initialPostData = [];
    postSnapshot.forEach((post) => {
      initialPostData.push({ id: post.id, ...post.data() });
    });
    setUserData(initialPostData); // Set initial data

    // Real-time listener for updates
    const unsubscribe = onSnapshot(postCollection, (snapshot) => {
      if (!snapshot.empty) {
        const updatePostData = [];
        snapshot.forEach((post) => {
          updatePostData.push({ id: post.id, ...post.data() });
        });
        setUserData(updatePostData); // Update data on change
      } else {
        console.log("No posts available in Firestore");
      } // Update data on change
    });

    // Return the unsubscribe function to clean up the listener when necessary
    return unsubscribe;
  } catch (error) {
    console.error("Error fetching all posts data from Firestore:", error);
    throw error;
  }
}

export async function addPostData(postId, newPost) {
  try {
    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid Post ID");
    }

    // Store User Data in Firestore
    const postRef = doc(firestore, "posts", postId);
    await setDoc(postRef, { ...newPost });
    console.log("Post added to Firestore Successfully");
  } catch (error) {
    console.error("Error adding new post to Firestore:", error);
    throw error;
  }
}

export async function deletePostData(postId) {
  const postRef = doc(firestore, "posts", postId);

  try {
    await deleteDoc(postRef);
    console.log("Post Data deleted successfully!");
  } catch (error) {
    console.error("Error deleting post data", error);
  }
}

// export async function updateUserData(uid, data) {
//   const postRef = doc(firestore, "users", uid);
//   const { mobileNum } = data;

//   try {
//     await updateDoc(postRef, data);
//     writeMobileNumber(uid, mobileNum);
//     console.log("User Data updated successfully!");
//   } catch (error) {
//     console.error("Error updating user data", error);
//   }
// }

// export async function updateLastSignIn(uid, data) {
//   const postRef = doc(firestore, "users", uid);

//   const signInData = { lastSignIn: data };

//   try {
//     await updateDoc(postRef, signInData);
//     console.log("User Last Sign in updated successfully!");
//   } catch (error) {
//     console.error("Error updating User Last Sign in", error);
//   }
// }

// export async function storeDeviceToken(uid, uniqueToken) {
//   const postRef = doc(firestore, "users", uid);
//   const token = {
//     deviceToken: arrayUnion(uniqueToken),
//   };

//   try {
//     await updateDoc(postRef, token);
//   } catch (error) {
//     console.error("Error storing Device Token in Firestore: ", error);
//   }
// }
