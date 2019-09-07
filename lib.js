const path = require('path');

const testJoin = (a, b) => {
  console.log("iam super super groovy!");
  console.log("iam super groovy!");
  console.log("iam super groovy!");
  console.log("iam super groovy!");
  console.log("iam super groovy!");
  console.log("iam super groovy!");
  console.log("iam super groovy!");
  console.log("iam super groovy!");
  console.log("iam super groovy!");
  console.log("iam super groovy!");
  return path.join(a, b);
};

module.exports = {
  testJoin
};