module.exports = {
  Init: ({ query }) => {
    return {
      testService: require("./test")({ query }),
    };
  },
};
