/** MySQL连接配置 */
const option = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "admin_123456",
  database: "book_system",
  connectTimeout: 5000,
  connectLimit: 200
};
module.exports = option;
