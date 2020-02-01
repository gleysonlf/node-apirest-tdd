const request = require("supertest");

const app = require('../../src/app');

const user = {
  name: 'Test User',
  email: `${Date.now()}@email.com`,
  password: '12356'
}

test('Deve listar todos os usuários', () => {
  return request(app).get('/users')
    .then(res => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    })
});

test('Deve inserir usuário com sucesso', () => {
  return request(app).post('/users')
    .send({ ...user })
    .then(res => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe(user.name);
    })
})

test('Não deve inserir usuário sem nome', () => {
  return request(app).post('/users')
    .send({ email: user.email, password: user.password })
    .then(res => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Propriedade "name" é um atributo obrigatório.');
    });
})

test('Não deve inserir usuário sem email', async () => {
  const res = await request(app).post('/users')
    .send({ name: user.name, password: user.password });
  expect(res.status).toBe(400);
  expect(res.body.error).toBe('Propriedade "email" é um atributo obrigatório.');
})

