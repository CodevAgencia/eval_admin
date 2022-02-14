import EnterprisingRepository from '../../repositories/enterprisingRepository';

const EnterprisingService = {
  getEnterprising: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await EnterprisingRepository.getEnterprising();
    } catch (error) {
      throw error;
    }
  },
};

export default EnterprisingService;
