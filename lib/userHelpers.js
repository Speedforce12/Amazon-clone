import axios from "axios";

export const userApi = axios.create({ baseURL: process.env.NEXT_PUBLIC_URI });

// create a new user
// export const createUser = async (data) => {
//   try {
//     const res = await userApi.post("/auth/signup", data);
//     const user = await res.data;
//     return user;
//   } catch (error) {
//     console.log(error);
//   }
// };
