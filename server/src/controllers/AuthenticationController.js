module.exports = {
  register (req, res) {
    res.send({
      message: `Witaj ${req.body.email}! Uzytkownik zainstalowany`
    })
  }
}
