import app from "./init";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const firestore = getFirestore(app);

export const retriveData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

export const retriveDataById = async (collectionName: string, id: string) => {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();

  if (data && collectionName === "forums") {
    const getComments = await retriveDataByField("comments", "forum_id", id);
    data.comments = getComments;
    return data;
  }
};

export const retriveDataByField = async (
  collectionName: string,
  field: string,
  value: string
) => {
  const q = query(
    collection(firestore, collectionName),
    where(field, "==", value)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

export const addData = async (
  collectionName: string,
  data: any,
  callback: Function
) => {
  try {
    const docRef = await addDoc(collection(firestore, collectionName), data);
    if (collectionName === "comments" && data.forum_id) {
      const forumDocRef = doc(firestore, "forums", data.forum_id);
      await updateDoc(forumDocRef, {
        comments: arrayUnion(docRef.id),
      });
    }

    if (collectionName === "forums" && data.user_id) {
      const userDocRef = doc(firestore, "users", data.user_id);
      await updateDoc(userDocRef, {
        forums: arrayUnion(docRef.id),
      });
    }

    if (collectionName === "comments" && data.user_id) {
      const userDocRef = doc(firestore, "users", data.user_id);
      await updateDoc(userDocRef, {
        comments: arrayUnion({
          comment_id: docRef.id,
          forum_id: data.forum_id,
        }),
      });
    }

    callback(true, docRef);
  } catch (error) {
    console.error("Error adding document: ", error);
    callback(false);
  }
};

// export const retriveForumById = async (id: string) => {
//   const snapshot = await getDoc(doc(firestore, "forum", id));
//   const data = snapshot.data();

//   if (data) {
//     const getComments = await retriveDataByField("comment", "forum_id", id);
//     data.comments = getComments;
//     return data;
//   }
// };
