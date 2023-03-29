/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = knex =>
  knex.schema.createTable('tb_user', table => {
    table.increments('cd_user')
    table.text('nm_user').notNullable()
    table.text('nm_email').notNullable()
    table.text('cd_senha').notNullable()
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('tb_user')