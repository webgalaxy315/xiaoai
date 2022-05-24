const ClientInfo = require('./ClientAppInfo');

class Context {
  constructor(context){
    Object.assign(this, context);
    const { app_info } = context;
    app_info && Array.isArray(app_info) && (
      this.app_info = app_info.map(info => new ClientInfo(info))
    );
  }
}

module.exports = Context;