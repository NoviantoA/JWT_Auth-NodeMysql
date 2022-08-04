import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
// import Users from "./models/UserModel.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

// test koneksi database
try {
  await db.authenticate();
  console.log("Database berhasil terhubung....");
  // await Users.sync();
} catch (error) {
  console.error(error);
}

// use cors sebagai middleware
// use cors agar dapat digunakan di luar domain
// origin berisi domain yang diizinkan untuk mengakses API
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// use cookie parser sebagai middleware
app.use(cookieParser());

// menerima format data dalam bentuk json
app.use(express.json());

// use router sebagai midleware
app.use(router);

// pembua tan port
app.listen(5000, () => console.log("server berjalan pada port 5000"));
