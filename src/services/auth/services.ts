import { addData, retriveDataByField } from "@/lib/firebase/services";
import bcrypt from "bcrypt";

export const signUp = async (
  userData: {
    email: string;
    fullName: string;
    password: string;
    phone: string;
    role?: string;
    created_at?: Date;
    updated_at?: Date;
    image: string;
  },
  callback: Function
) => {
  const data = await retriveDataByField("users", "email", userData.email);
  if (data.length > 0) {
    callback(false);
  } else {
    if (!userData.role) {
      userData.role = "member";
    }
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.created_at = new Date();
    userData.updated_at = new Date();
    userData.image = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    await addData("users", userData, (result: boolean) => {
      callback(result);
    });
  }
};

export const signIn = async (email: string) => {
  const data = await retriveDataByField("users", "email", email);

  if (data) {
    return data[0];
  } else {
    return null;
  }
};

export const loginWithGoogle = async (
  data: {
    id?: string;
    email: string;
    role?: string;
    image?: string;
    created_at?: Date;
    updated_at?: Date;
    password?: string;
  },
  callback: Function
) => {
  const user = await retriveDataByField("users", "email", data.email);
  data.created_at = new Date();
  data.updated_at = new Date();
  data.password = "";
  if (user.length > 0) {
    callback(user[0]);
  } else {
    data.role = "member";
    await addData("users", data, (result: boolean, res: any) => {
      data.id = res.path.replace("users/", "");
      if (result) {
        callback(data);
      }
    });
  }
};
