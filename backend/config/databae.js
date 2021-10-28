const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blog", "avyay", "123456", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
