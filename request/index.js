const Session = require('./Session');
const Context = require('./Context');
const Request = require('./Request');

module.exports = class {
  constructor({ version, query, session, context, request }){
    this.query = query;
    this.version = version;
    this.session = new Session(session);
    this.context = new Context(context);
    this.request = new Request(request);
    return this;
  }
}