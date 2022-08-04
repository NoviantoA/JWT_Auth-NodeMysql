import jwt from "jsonwebtoken";

// verifikasi token
export const verifyToken = (req, res, next) => {
  // header authorization
  const authHeader = req.headers["authorization"];
  // ambil token
  const token = authHeader && authHeader.split(" ")[1];
  // valiadasi
  if (token == null) return res.sendStatus(401);
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    // callback
    (err, decoded) => {
      if (err) return res.sendStatus(403);
      req.email = decoded.email;
      next();
    }
  );
};
