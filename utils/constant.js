/** 常量定义 */

module.exports = {
  JWT_PRIVATE_KEY: "null-hands", // jwt加密私钥
  JWT_EXPIRED: 60 * 60 * 24, // jwt过期时间24小时
  CRYPTO_SECRET: "cry-Sec123", //crypto加密私钥
  CODE_ERROR: -1,
  CODE_SUCCESS: 200, //成功
  //免token验证白名单
  WHITE_LIST_PATH: [
    "/",
    "/api/user/login",
    "/api/user/register",
    "/api/user/resetPwd",
    "/api/user/getMsg"
  ]
};
