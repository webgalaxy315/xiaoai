
module.exports = class {
  constructor(message){
    Object.assign(this, {
      version: '1.0',
      is_session_end: false
    }, message);
  }
  set(name, value){
    this.session_attributes = this.session_attributes || {};
    this.session_attributes[name] = value;
    return this;
  }
  bye(){
    this.is_session_end = true;
    return this;
  }
  reply(response){
    this.response = response;
    return this.send(this);
  }
};