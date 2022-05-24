const User = require('./User');
const Application = require('./Application');

class Session {
  constructor(session){
    Object.assign(this, session);
    const { user, application } = this;
    this.user = new User(user);
    this.application = new Application(application);
  }
}

module.exports = Session;