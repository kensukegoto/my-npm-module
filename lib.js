const path = require('path');

const testJoin = (a, b) => {
  console.log("ヘッロー！");
  console.log("ヘッロー！");
  console.log("ヘッロー！");
  console.log("ヘッロー！");
  console.log("ヘッロー！");
  console.log("ヘッロー！");
  console.log("ヘッロー！");
  console.log("ヘッロー！");
  console.log("ヘッロー！");
  console.log("ヘッロー！");
  return path.join(a, b);
};

module.exports = {
  testJoin
};