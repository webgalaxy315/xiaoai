const http = require('http');
const kelp = require('kelp');
const send = require('kelp-send');
const body = require('kelp-body');
const Request = require('./request');
const Response = require('./response');

class XiaoAI extends http.Server {
  constructor(options){
    super(kelp(body, send, (req, res) => {
      const request = new Request(req.body);
      const response = new Response();
      response.send = res.send.bind(res, response);
      this.emit('message', request, response);
    }));
    return Object.assign(this, options);
  }
  start(fn){
    const { port = 3000 } = this;
    return this.listen(port, fn);
  }
}

module.exports = XiaoAI;