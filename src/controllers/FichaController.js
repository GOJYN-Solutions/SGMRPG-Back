const knex = require("../database")

module.exports = {
    async getAll(req, res) {
        const results = await knex('tb_ficha')
        return res.json(results)
    },
    async getAllUser(req, res) {
        const results = await knex('tb_ficha').where('cd_user', req.params.userId)
        return res.json(results)
    },
    async getOne(req, res) {
        const results = await knex('tb_ficha').where({
            cd_ficha: req.params.fichaId,
            cd_user: req.params.userId
        })
        return res.json(results)
    },
    async register(req, res) {
        try {
            const results = await knex('tb_ficha').insert(
                {cd_user: req.params.userId, nm_ficha: req.body.nome, ds_ficha: req.body.desc, ic_publico: false}
            )
            return res.json(results)
        } catch (error) {
            return res.json(error)
        }
    },
    async update(req, res) {
        try {
            const results = await knex('tb_ficha').where({
                 cd_ficha: req.params.fichaId,
                 cd_user: req.params.userId
                }).update({
                cd_user: req.params.userId, nm_ficha: req.body.nome, ds_ficha: req.body.desc, ic_publico: false
            })
            return res.json(results)
        } catch (error) {
            return res.json(error)
        }
    },
    async remove(req, res) {
        try {
            const results = await knex('tb_ficha').where({
                cd_ficha: req.params.fichaId,
                cd_user: req.params.userId
            }).del()
            return res.json(results)
        } catch (error) {
            return res.json(error)
        }
    }
}