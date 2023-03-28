const knex = require("../database")

module.exports = {
    async getAll(req, res) {
        const results = await knex('users')
        return res.json(results)
    },
    async getOne(req, res) {
        const results = await knex('users').where('id',req.params.id)
        return res.json(results)
    },
    async register(req, res) {
        try {
            const results = await knex('users').insert(
                {username: req.body.username, email: req.body.email, password: req.body.password}
            )
            return res.json(results)
        } catch (error) {
            return res.json(error)
        }
    },
    async update(req, res) {
        try {
            const results = await knex('users').where({ id: req.body.id}).update({
                username: req.body.username, email: req.body.email, password: req.body.password
            })
            return res.json(results)
        } catch (error) {
            return res.json(error)
        }
    },
    async remove(req, res) {
        try {
            const results = await knex('users').where('id', req.body.id).del()
            return res.json(results)
        } catch (error) {
            return res.json(error)
        }
    }
}