const ip = require('ip');
const {send} = require('micro')

module.exports = (req, res) => {
  send(res, 200, {ip: ip.address()})
}
