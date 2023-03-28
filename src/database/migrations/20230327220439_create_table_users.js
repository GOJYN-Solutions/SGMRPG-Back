/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>  knex.schema.createTable('users', table => {
    table.increments('id')
    table.text('username').notNullable()
    table.text('email').notNullable()
    table.text('password').notNullable()
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knes => knex.schema.dropTable('users')