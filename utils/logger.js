/** 日志文件操作定义 */

const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");

// 年月日生成日志文件名: 存在-a操作，不存在-w操作
let filename = dayjs(new Date()).format("YYYY-MM-DD") + ".log";
let isExist = false;
try {
  fs.readdir("./log", (err, files) => {
    isExist = files.find(file => file.indexOf(filename) != undefined);
  });
} catch (err) {
  console.log(err);
}
let logStream = fs.createWriteStream(path.join(__dirname, "../log", filename), {
  flags: isExist ? "a" : "w"
});

// 控制台输出日志：仅输出错误日志
const logger_printErr = morgan("dev", {
  skip(req, res) {
    return res.statusCode < 400;
  }
});

// 创建日志文件写入：所有日志写入
const logger_write = morgan("short", { stream: logStream });

module.exports = {
  logger_printErr,
  logger_write
};
