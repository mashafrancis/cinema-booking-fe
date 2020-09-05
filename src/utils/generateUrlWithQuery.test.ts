import generateUrlWithQuery from "./generateUrlWithQuery";

describe('The generate query endpoint function', () => {
  beforeAll(() => {
    process.env.OMDB_API_KEY = '1234';
  })

  afterAll(() => {
    delete process.env.OMDB_API_KEY
  })

  test('generates an endpoint when there are no query parameters', () => {
    const endpoint = generateUrlWithQuery('/movies');
    expect(endpoint).toEqual('/movies?apikey=1234');
  });

  test('generates endpoint when there are query parameters', () => {
    const endpoint = generateUrlWithQuery('/movies', {
      name: 'batman',
    });
    expect(endpoint).toEqual('/movies?apikey=1234&name=batman');
  });
});
