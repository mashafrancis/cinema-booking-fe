import camelCase from './camelCase';

describe('The camelCase helper function', () => {
  test('should covert a string to camel case', () => {
    expect(camelCase('Cinema is cool')).toEqual('cinemaIsCool');
    expect(camelCase('Cinema Is cool')).toEqual('cinemaIsCool');
    expect(camelCase('cinema is Cool')).toEqual('cinemaIsCool');
  });
});
