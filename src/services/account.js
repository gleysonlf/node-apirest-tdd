module.exports = (app) => {

  const save = async (user) => {    
    return app.db('accounts').insert(user, '*');
  }

  return { save };
}