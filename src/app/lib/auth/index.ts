import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { findUser } from '../actions';


export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        if (!credentials) return null;
        return await findUser();
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      const user = await findUser();
      token.id = user.id;
      token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },
});
