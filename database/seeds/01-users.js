
exports.seed = function(knex) {
  return knex('users').insert([
    {username: 'JCanela7', password: 'password'}
  ])
}
  
