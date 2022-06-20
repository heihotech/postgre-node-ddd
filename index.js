(async () => {
  require("./internal/config").Init();

  const config = require("./internal/config").Var;
  const { query, httpRouter } = await require("./infra").Init();

  const { testService } = require("./service").Init({
    query,
  });

  require("./domain").New({
    httpTool: {
      httpRouter,
    },
    services: {
      testService,
    },
  });

  require("./infra/httpserver")
    .Invoke(httpRouter)
    .listen(config.AppPort, () => {
      console.log(`+++ Application is Running on Port ${config.AppPort}. +++`);
    });
})();
