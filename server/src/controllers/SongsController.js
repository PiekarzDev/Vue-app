const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 15
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'Proba znalezienia piosenek nieudana !'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'Blad utworzenia piosenki'
      })
    }
  }
}
