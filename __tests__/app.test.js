const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Gem = require('../lib/models/CrystalGem');

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
  afterAll(() => {
    pool.end();
  });
});
