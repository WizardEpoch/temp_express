const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("./utils/logger");
const routes = require("./routes/index");

// 创建app应用
let app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 日志中间件挂载
Object.keys(logger).forEach(key => {
  app.use(logger[key]);
});
app.use(cors()); //cors 解决跨域
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// 路由挂载
app.use("/", routes);

module.exports = app;
