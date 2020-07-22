import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  site: process.env.SITE || "http://localhost:3000",

  pages: {
    signin: "/login",
    // signout: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      id: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "shusjsmith",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Add logic here to look up the user from the credentials supplied
        //const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };
        const user = null;
        console.log(credentials);
        console.log(user);
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user);
        } else {
          // If you return null or false then the credentials will be rejected
          return Promise.resolve(null);
        }
      },
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
