import jwt from "next-auth/jwt";

const secret = process.env.SECRET;

export default async (req, res) => {
  // Automatically decrypts and verifies JWT
  const token = await jwt.getJwt({ req, secret });
  console.log(token);
  res.end(JSON.stringify(token, null, 2));
};
