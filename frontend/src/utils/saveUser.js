import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const saveUserToFirestore = async (user) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  // Save ONLY if user does not already exist
  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName || "",
      email: user.email || "",
      phone: user.phoneNumber || "",
      role: "tenant",
      createdAt: new Date(),
    });
  }
};
