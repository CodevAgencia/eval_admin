import { dataTotalTable } from '../utils/fakeDataResultTable';
import http from '../services/http';

const resultUrl = '/api/user/results';

const resultsRepository = {
  getResultDataTable: async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.get(`${resultUrl}/${id}`);
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
