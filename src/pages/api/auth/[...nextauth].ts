import bcrypt from "bcrypt";
import { loginWithGoogle, signIn } from "@/lib/firebase/services";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Googleprovider from "next-auth/providers/google";
import NextAuth from "next-auth/next";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user: any = await signIn(email);

        if (user) {
          const passwordConfirm = await bcrypt.compare(password, user.password);

          if (passwordConfirm) {
            return user;
          }
          return null;
        }
        return null;
      },
    }),

    Googleprovider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user?.email;
        token.fullname = user?.fullname;
        token.phone = user?.phone;
        token.role = user?.role;
      }

      if (account?.provider === "google") {
        const data = {
          fullname: user?.name,
          email: user?.email,
          type: "google",
        };

        await loginWithGoogle(data, (data: any) => {
          token.email = data?.email;
          token.fullname = data?.fullname;
          token.role = data?.role;
        });
      }
      return token;
    },

    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if ("phone" in token) {
        session.user.phone = token.phone;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
