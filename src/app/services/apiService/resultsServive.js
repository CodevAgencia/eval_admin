import resultsRepository from '../../repositories/resultsRepository';

const resultsServive = {
  getResultsTable: async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await resultsRepository.getResultDataTable(id);
    } catch (error) {
      throw error;
    }
  },
  getResultsSummary: async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await resultsRepository.getResultSummaryTable(id);
    } catch (error) {
      throw error;
    }
  },
};

export default resultsServive;
