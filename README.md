# Best API REST
> API REST em Node.JS aplicando testes (TDD) desde o princípio


Construção de uma Web API REST com Node.JS (Express) aplicando Test Driven Development (TDD) para exercitar os conhecimentos e massificar boas práticas.


```
npm i -S body-parser
npm i -S consign
npm i -S knex
npm i -S pg
```


```
node_modules\.bin\knex.cmd migrate:make create_users --env test
node_modules\.bin\knex.cmd migrate:make create_accounts --env test
node_modules\.bin\knex.cmd migrate:latest --env test
node_modules\.bin\knex.cmd migrate:rollback --env test
```


```sql
INSERT INTO 'users'
VALUES (1, 'Tester User', 'tester@email.com','123456')

UPDATE 'users' SET name = 'Tester User' WHERE id = 1

DELETE FROM 'users' WHERE id > 1

SELECT * FROM 'users'
```