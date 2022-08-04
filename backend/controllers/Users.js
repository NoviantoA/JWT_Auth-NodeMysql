import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// get user
export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      // get user berdasarkan id name email
      attributes: ["id", "name", "email"],
    });
    // pharsing
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

// register
export const Register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword)
    return res
      .status(400)
      .json({ message: "Password dan confirm password tidak cocok!" });
  //   kondisi password sudah sesuai
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      // pharsing data
      name: name,
      email: email,
      password: hashPassword,
    });
    // pesan data berhasil tersimpan ke database
    res.json({ message: "Berhasil melakukan registrasi" });
  } catch (error) {
    console.log(error);
  }
};

// login
export const Login = async (req, res) => {
  try {
    // cari user berdasarkan email
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    // validasi password
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match)
      return res
        .status(400)
        .json({ message: "Password yang anda masukan salah" });
    // password cocok
    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    // akses token parameter pertama payload (object), parameter kedua secret key
    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        // waktu expired
        expiresIn: "20s",
      }
    );
    // refresh token
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        // waktu expired
        expiresIn: "1d",
      }
    );
    // simpan refresh token ke database
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          // update berdasarkan id
          id: userId,
        },
      }
    );
    // http only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      // expired cookie
      maxAge: 24 * 60 * 60 * 1000,
      // jika menggunakan https
      // secure: true,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ message: "Email tidak ditemukan!" });
  }
};

// logout
export const Logout = async (req, res) => {
  // get value set cookie
  const refreshToken = req.cookies.refreshToken;
  // validasi
  if (!refreshToken) return res.sendStatus(204);
  // membandingkan token yang didapat dengan yang ada di database
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  // token tidak cocok yang dikirimkan oleh user
  if (!user[0]) return res.sendStatus(204);
  // get id database
  const userId = user[0].id;
  // update refresh token
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  // delete cookie
  res.clearCookie("refresh_token");
  return res.sendStatus(200);
};
