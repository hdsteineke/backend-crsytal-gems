const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { gems } = require('../data/gems');

describe('gems routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/gems should return a list of crystal gems', async () => {
    const res = await request(app).get('/gems');
    const expected = gems.map((gem) => {
      return { id: gem.id, name: gem.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/gems/:id should return a detailed crystal gem', async () => {
    const res = await request(app).get('/gems/1');
    const steven = {
      id: '1',
      name: 'Steven',
      nickname: 'Schtu-ball',
      species: 'Part Human, Part Gem',
      weapon: 'Shield',
      components: 'Not a fusion'
    };
    expect(res.body).toEqual(steven);
  });


  afterAll(() => {
    pool.end();
  });
});
