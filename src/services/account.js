module.exports = (app) => {
  const findAll = (filter = {}) => app.db('accounts').where(filter).select();

  const save = async (user) => app.db('accounts').insert(user, '*');

  return { findAll, save };
};
