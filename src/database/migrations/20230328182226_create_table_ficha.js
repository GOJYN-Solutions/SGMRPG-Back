/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = knex => 
    knex.schema.createTable('tb_ficha', table => {
        table.increments('cd_ficha')
        table.increments('cd_user', false)
        table.text('nm_ficha').notNullable()
        table.binary('im_ficha')
        table.text('ds_ficha').notNullable()
        table.boolean('ic_publico').notNullable()

        table.foreign('cd_user').references('cd_user').inTable('tb_user')
        })
    
    


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('tb_ficha')
