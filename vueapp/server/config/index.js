export default {
  databaseUrl:
    process.env.DATABSE_URL || "mongodb://localhost:27017/vueappmongo",
  url: process.env.APP_URL || "http://localhost:3000",
  jwtSecret: process.env.JWT_SECRET || "1234"
};
