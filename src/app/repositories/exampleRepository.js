import http from '../services/http';

const categoryBankUrl = '/api/v1/categories/bank';

const categoryBankRepository = {
  getCategoryBank: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.get(`${categoryBankUrl}`);
    } catch (error) {
      throw error;
    }
  },
};
export default categoryBankRepository;
