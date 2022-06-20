module.exports = ({ query }) => {
  return {
    SelectOne: async () => {
      try {
        const selectQuery = "SELECT 1";
        // const data = await pool.query(selectQuery);
        const data = await query(selectQuery);
        return data;
      } catch (error) {
        throw error;
      }
    },
  };
};
