/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tb_user').del()
  await knex('tb_user').insert([
    {
      nm_user: 'admin', 
      nm_email: 'admin@gmail.com', 
      cd_senha: 'password'
    },
    {
      nm_user: 'naruto', 
      nm_email: 'naruto@gmail.com', 
      cd_senha: 'password'
    },
    {
      nm_user: 'jenny', 
      nm_email: 'jenny@gmail.com', 
      cd_senha: 'password'
    },
    {
      nm_user: 'tavone', 
      nm_email: 'tavone@gmail.com', 
      cd_senha: 'password'
    },
    {
      nm_user: 'yesus', 
      nm_email: 'yesus@gmail.com', 
      cd_senha: 'password'
    }
  ]);
};
