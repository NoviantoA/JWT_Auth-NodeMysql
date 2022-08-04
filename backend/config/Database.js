import { Sequelize } from "sequelize";

// koneksi ke database
const db = new Sequelize("JWT_Auth", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
