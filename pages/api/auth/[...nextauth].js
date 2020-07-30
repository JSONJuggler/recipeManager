import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";
import jwt from "jsonwebtoken";

// IT WORKS
const options = {
  site: process.env.SITE + process.env.BASE_PATH,
  //basePath: process.env.BASE_PATH + "/api/auth",
  secret: process.env.SECRET,
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.SECRET,
  },
  callbacks: {
    /**
     * @param  {object} token    Decrypted JSON Web Token
     * @param  {object} profile  Profile - only available on sign in
     * @return {object}          JSON Web Token that will be saved
     */
    jwt: async (token, profile) => {
      const payload = {
        id: token.user.id,
      };

      const freshToken = jwt.sign(payload, process.env.SECRET, {
        expiresIn: 7200,
      });
      token.user.strapiToken = freshToken;
      return Promise.resolve(token);
    },
    /**
     * @param  {object} session  Session object
     * @param  {object} token    JSON Web Token (if enabled)
     * @return {object}          Session that will be returned to the client
     */
    //session: async (session, token) => {
    //console.log("session");
    //return Promise.resolve(session);
    //},
  },
  pages: {
    signin: process.env.BASE_PATH + "/",
    // signout: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      authorize: async (credentials) => {
        // Add logic here to look up the user from the credentials supplied

        //console.log(credentials);

        let user;

        try {
          //console.log("trying");
          const res = await axios.post(
            process.env.NEXT_PUBLIC_STRAPI_API_URL + "/auth/local",
            {
              identifier: credentials.email,
              password: credentials.password,
            }
          );
          //console.log("axios response", res.data);

          user = {
            strapiToken: res.data.jwt,
            id: res.data.user.id,
            name: res.data.user.username,
            email: res.data.user.email,
            confirmed: res.data.user.confirmed,
            blocked: res.data.user.blocked,
            recipes: res.data.user.recipes,
          };
          //console.log(user);
        } catch (err) {
          console.log("failed");
          console.log(err.response.data);
        }
        //console.log("user", user);
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          console.log("login success");
          return Promise.resolve(user);
        } else {
          // If you return null or false then the credentials will be rejected
          console.log("login fail");
          return Promise.resolve(null);
        }
      },
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
