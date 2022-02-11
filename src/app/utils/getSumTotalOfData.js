// eslint-disable-next-line import/prefer-default-export
export const getSumTotalOfData = (data) => {
  return data.reduce((acc, cur) => acc + cur, 0);
};
