import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

// refresh token
export const refreshToken = async (req, res) => {
  try {
    // get value set cookie
    const refreshToken = req.cookies.refreshToken;
    // validasi
    if (!refreshToken) return res.sendStatus(401);
    // membandingkan token yang didapat dengan yang ada di database
    const user = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    // verifikasi token yang didapat
    if (!user[0]) return res.sendStatus(403);
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        // callback
        if (err) return res.sendStatus(403);
        // get vlue id name dan email user
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        // create akses token baru
        const accessToken = jwt.sign(
          { userId, name, email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "15s",
          }
        );
        // kirim access token ke client
        res.json({ accessToken });
      }
    );
  } catch (error) {
    console.log(error);
  }
};
