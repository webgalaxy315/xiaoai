const XiaoAI = require('..');
const Response = require('../response/Response');

const ai = new XiaoAI({

});

ai.on('message', (req, res) => {
  console.log(req);
  const response = new Response();
  response.speak('hello');
  res.reply(response);
});

ai.start();