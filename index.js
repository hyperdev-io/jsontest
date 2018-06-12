const requestIp = require('request-ip');
const {send} = require('micro')

module.exports = (req, res) => {
  const ip = requestIp.getClientIp(req)
  send(res, 200, {ip: ip})
}
