const postgre = require("./postgre");
const httpServer = require("./httpserver");

module.exports = {
  Init: async () => {
    const pool = await postgre.pool;
    const query = await postgre.query;
    const httpRouter = httpServer.Init();

    return { pool, query, httpRouter };
  },
};
