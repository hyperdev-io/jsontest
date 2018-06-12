const {send} = require('micro')

module.exports = (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress
  send(res, 200, {ip: ip})
}
