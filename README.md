# TDD API REST
> API REST em Node.JS aplicando testes (TDD) desde o princípio


Construção de uma Web API REST com Node.JS (Express) aplicando Test Driven Development (TDD) para exercitar os conhecimentos e massificar boas práticas.


```
npm i -S body-parser
npm i -S consign
npm i -S knex
npm i -S pg
```

## Knext e Migrations
> As Migrations são uma maneira de fazer alterações ou atualizações do banco de dados, como criar ou eliminar tabelas, bem como atualizar uma tabela com novas colunas com restrições por meio de scripts gerados. Podemos criar esses scripts através da linha de comando usando a ferramenta de linha de comando knex.

Comandos para criação das migrations:
```
npx knex migrate:make create_users --env test
npx knex migrate:make create_accounts --env test
```

Comando para execução das migrate:
```
npx knex migrate:latest --env test
```

Comando para retornar o processo executado pela migrate
```
npx knex migrate:rollback --env test
```


```sql
INSERT INTO 'users'
VALUES (1, 'Tester User', 'tester@email.com','123456')

UPDATE 'users' SET name = 'Tester User' WHERE id = 1

DELETE FROM 'users' WHERE id > 1

SELECT * FROM 'users'
```