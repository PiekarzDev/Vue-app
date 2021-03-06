const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{6,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Zly email'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Zle haslo'
          })
          break
        default:
          res.status(400).send({
            error: 'niepoprawne dane'
          })
      }
    } else {
      next()
    }
  }
}
