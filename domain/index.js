const Test = require("./test");
module.exports = {
  New: ({ httpTool, services }) => {
    const { testService } = services;

    Test({ httpTool, testService });
  },
};
