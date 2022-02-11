import { dataResultTable, dataTotalTable } from '../utils/fakeDataResultTable';

const resultUrl = '/api/results';

const resultsRepository = {
  getResultDataTable: async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
      // return await http.get(`${resultUrl}`);
      return dataResultTable;
    } catch (error) {
      throw error;
    }
  },
  getResultSummaryTable: async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
      // return await http.get(`${resultUrl}`);
      return dataTotalTable;
    } catch (error) {
      throw error;
    }
  },
};
export default resultsRepository;
