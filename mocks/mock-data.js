import faker from 'faker';

export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const mockData = (seed = 12345678) => {
  faker.seed(seed);

  return {
    // Data sources here

    // Data actions here

    // Dev helpers
    resetMock: () => {
      // Reset all mock data
      return { reset: 'data here' }
    },
  };
};

export default mockData;
