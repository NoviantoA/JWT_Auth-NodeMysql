import { Sequelize } from "sequelize";
import db from "../config/Database.js";
// panggil  datatype sequelize
const { DataTypes } = Sequelize;

// buat schema
const Users = db.define(
  "users",
  {
    // field
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    // opsi
    freezeTableName: true,
  }
);

export default Users;
