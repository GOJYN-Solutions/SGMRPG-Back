/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tb_ficha').del()
  await knex('tb_ficha').insert([
    {
      cd_user: 1, 
      nm_ficha: 'Personagem Genérico 1',
      ds_ficha: 'Personagem Genérico criado apenas para testar.',
      ic_publico: false
    },
    {
      cd_user: 2, 
      nm_ficha: 'Personagem Genérico 2',
      ds_ficha: 'Personagem Genérico criado apenas para testar.',
      ic_publico: false
    },
    {
      cd_user: 3, 
      nm_ficha: 'Personagem Genérico 3',
      ds_ficha: 'Personagem Genérico criado apenas para testar.',
      ic_publico: false
    },
    {
      cd_user: 4, 
      nm_ficha: 'Personagem Genérico 4',
      ds_ficha: 'Personagem Genérico criado apenas para testar.',
      ic_publico: false
    },
    {
      cd_user: 5, 
      nm_ficha: 'Personagem Genérico 5',
      ds_ficha: 'Personagem Genérico criado apenas para testar.',
      ic_publico: false
    },
    {
      cd_user: 1, 
      nm_ficha: 'Personagem Genérico 6',
      ds_ficha: 'Personagem Genérico criado apenas para testar.',
      ic_publico: false
    },
    {
      cd_user: 3, 
      nm_ficha: 'Personagem Genérico 7',
      ds_ficha: 'Personagem Genérico criado apenas para testar.',
      ic_publico: false
    },
    {
      cd_user: 5, 
      nm_ficha: 'Personagem Genérico 8',
      ds_ficha: 'Personagem Genérico criado apenas para testar.',
      ic_publico: false
    }
  ]);
};
