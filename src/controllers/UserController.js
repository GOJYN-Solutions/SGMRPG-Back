const knex = require("../database")

module.exports = {
    async getAll(req, res) {
        const results = await knex('tb_user')
        return res.json(results)
    },
    async getOne(req, res) {
        const results = await knex('tb_user').where('cd_user',req.params.userId)
        return res.json(results)
    },
    async register(req, res) {
        try {
            const results = await knex('tb_user').insert(
                {nm_user: req.body.username, nm_email: req.body.email, cd_senha: req.body.password}
            )
            return res.json(results)
        } catch (error) {
            return res.json(error)
        }
    },
    async update(req, res) {
        try {
            const results = await knex('tb_user').where({ cd_user: req.params.userId}).update({
                nm_user: req.body.username, nm_email: req.body.email, cd_senha: req.body.password
            })
            return res.json(results)
        } catch (error) {
            return res.json(error)
        }
    },
    async remove(req, res) {
        try {
            const results = await knex('tb_user').where('cd_user', req.params.userId).del()
            return res.json(results)
        } catch (error) {
            return res.json(error)
        }
    }
}