const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async  register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJason = user.toJSON()
      res.send({
        user: userJason,
        token: jwtSignUser(userJason)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email is alredy in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.status(403).send({
          error: 'Podany Login nieprawidlowy'
        })
      }

      const isPasswordValid = user.comparePassword(password)

      if (!isPasswordValid) {
        res.status(403).send({
          error: 'niepoeprawne haslo'
        })
      }

      const userJason = user.toJSON()

      res.send({
        user: userJason,
        token: jwtSignUser(userJason)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Niepoprawne dane logowania !'
      })
    }
  }
}
