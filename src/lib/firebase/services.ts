import app from "./init";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export const retriveData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

export const retriveDataById = async (collectionName: string, id: string) => {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
};

export const signUp = async (
  userData: {
    email: string;
    password: string;
    fullname: string;
    role?: string;
    phone: string;
  },
  callback: Function
) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  if (data.length > 0) {
    callback(false);
  } else {
    if (!userData.role) {
      userData.role = "member";
    }
    userData.password = await bcrypt.hash(userData.password, 10);
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback(true);
      })
      .catch((error) => {
        callback(false);
      });
  }
};
