import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import connectMongo from "@/lib/connection";
import Users from "@/Model/users";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch((err) => {
          err: "Credentials Failed";
        });

        const user = Users.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No User found in the database");
        }

        const checkPassword = await compare(
          credentials.password,
          user.password
        );

        if (!checkPassword) {
          throw new Error("Password doesn't match Database password");
        }

        if (credentials.email !== user.email) {
          throw new Error("Email does not match email on database");
        }

        return user;
      },
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
