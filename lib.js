const path = require('path');

const testJoin = (a, b) => {
  alert("hi");
  return path.join(a, b);
};

module.exports = {
  testJoin
};