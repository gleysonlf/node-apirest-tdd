const request = require("supertest");

const app = require('../../src/app');

const MAIN_ROUTE = '/accounts';

let user;

beforeAll(async () => {
  const res = await app.services.user.save({
    name: 'Tester User',
    email: `${Date.now()}@email.com`,
    password: '12356'
  });
  user = {
    ...res[0]
  }
})

test('Deve inserir uma conta com sucesso', () => {
  const account = {
    name: 'Acc #1',
    user_id: user.id
  };
  return request(app).post(MAIN_ROUTE)
    .send(account)
    .then(res => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe(account.name);
    })
})