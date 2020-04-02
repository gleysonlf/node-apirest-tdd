module.exports = (app) => {

  const findAll = (filter = {}) => {
    return app.db('accounts').where(filter).select();
  }

  const save = async (user) => {    
    return app.db('accounts').insert(user, '*');
  }

  return { findAll, save };
}