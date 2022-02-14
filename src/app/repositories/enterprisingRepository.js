import http from '../services/http';

const baseUrl = '/api/user/entrepreneurs';

const EnterprisingRepository = {
  getEnterprising: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.get(`${baseUrl}`);
    } catch (error) {
      throw error;
    }
  },
};

export default EnterprisingRepository;
