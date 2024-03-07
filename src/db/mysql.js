import mysql from 'mysql2'
// 创建数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "he19880828",
  'port': 3306,
  database: "demo"
});
const query = (sql) => {
  return new Promise((resolve,reject) => {
    connection.query(sql,(err,results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}
export const fetchData = async () => {
  return query("select * from blogs")
}
// 在数据库连接关闭时触发
connection.on("end", () => {
  console.log("Database connection closed");
});

// 在发生错误时触发
connection.on("error", (err) => {
  console.error("Database error:", err);
});

// 关闭数据库连接
// connection.end();
