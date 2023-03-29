const knex = require("../database")

module.exports = {
    async login(req, res) {
        try{
            const results = await knex('tb_user').where({
                nm_email: req.body.email,
                cd_senha: req.body.senha
            })
            return res.json(results)
        }catch(error){
            return res.json(error)
        }
    },
}