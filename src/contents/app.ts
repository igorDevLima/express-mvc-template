export const app = (packageStructure: string) => `
const express = require("express");
const { errorMiddleware } = require("./common/middlewares/error");
require("express-async-errors");

const app = express();
app.use(express.json());

/*
------------------
  routes
------------------
*/

const userRouter = require("${
  packageStructure === "Package by feature(recommended) "
    ? "./user/user"
    : "./routes/userRoute"
}");

app.use("/user", userRouter);

// -----------------------------------------------------

app.use(errorMiddleware);

module.exports = app;`;
