const handler = ({ service }) => {
  return {
    Test: async (req, res, next) => {
      try {
        const data = await service.SelectOne();

        return res.send(data);
      } catch (error) {
        next(error);
      }
    },
  };
};

module.exports = ({ httpTool, testService }) => {
  const { httpRouter } = httpTool;

  const h = handler({ service: testService });

  httpRouter.get("/test", [], h.Test);
};
