/** jwt-token 验证&解析 */

const jwt = require("jsonwebtoken"); //验证jsonwebtoken
const expressJwt = require("express-jwt"); //express-jwt
const { JWT_PRIVATE_KEY, WHITE_LIST_PATH } = require("./constant"); //自定义的jwt密钥

// 验证token是否过期
const jwtAuth = expressJwt({
  secret: JWT_PRIVATE_KEY, //密钥设置
  credentialsRequired: false, //是否校验 true | false
  algorithms: ["HS256"], //jwt算法
  getToken: req => {
    // 自定义获取token的函数
    if (req.headers.Authorization) {
      return req.headers.Authorization;
    } else if (req.query && req.query.token) {
      return req.query.token;
    }
  }
}).unless({
  //设置jwt验证白名单
  path: WHITE_LIST_PATH
});

// jwt-token生成
function jwtEncode(data) {
  return jwt.sign(data, "token", { expiresIn: 60 * 60 * 24 });
}

// jwt-token解析
function jwtDecode(req) {
  const token = req.get("Authorization");
  return jwt.verify(token, JWT_PRIVATE_KEY);
}

module.exports = {
  jwtAuth,
  jwtEncode,
  jwtDecode
};
