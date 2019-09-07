const path = require('path');

const testJoin = (a, b) => {
  console.log("hello world");
  return path.join(a, b);
};

module.exports = {
  testJoin
};