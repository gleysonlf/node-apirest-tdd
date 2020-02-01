module.exports = (app) => {
  const findAll = () => {
    return app.db('users').select();
  }

  const save = (user) => {

    if (!user.name) return { error: 'Propriedade "name" é um atributo obrigatório.' }
    if (!user.email) return { error: 'Propriedade "email" é um atributo obrigatório.' }
    if (!user.password) return { error: 'Propriedade "password" é um atributo obrigatório.' }

    return app.db('users').insert(user, '*');
  }

  return { findAll, save };
}