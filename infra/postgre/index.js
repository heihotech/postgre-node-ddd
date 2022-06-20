const pool = require("./pool");

module.exports = {
  query: async (queryText, params) => {
    return new Promise((resolve, reject) => {
      pool
        .query(queryText, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
