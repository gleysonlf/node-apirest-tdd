const supertest = require('supertest');

const request = supertest('http://localhost:3001');

// Códigos de status de respostas HTTP
// As respostas são agrupadas em cinco classes:
// 1. Respostas de informação (100-199),
// 2. Respostas de sucesso (200-299),
// 3. Redirecionamentos (300-399)
// 4. Erros do cliente (400-499)
// 5. Erros do servidor (500-599).

// TESTE 01: 
// Acessar a url http://localhost:3001
// Verificar que a resposta foi 200
test('Deve responder na porta 3001', () => request.get('/')
    .then(response => expect(response.status).toBe(200))
)