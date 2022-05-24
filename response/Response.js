const ToSpeak = require('./ToSpeak');
const ToDisplay = require('./ToDisplay');
const Directive = require('./Directive');
const RegisterEvent = require('./RegisterEvent');
const ActionProperty = require('./ActionProperty');
/**
 * Response
 */
class Response {
  speak(text, type){
    this.to_speak = new ToSpeak({ type, text });
    return this;
  }
  display(display){
    if(!(display instanceof ToDisplay))
      display = new ToDisplay(display);
    this.to_display = display;
    return this;
  }
  directive(directive){
    if(!(directive instanceof Directive))
      directive = new Directive(directive);
    this.directives = this.directives || [];
    this.directives.push(directive);
    return this;
  }
  action(action, property){
    if(!(property instanceof ActionProperty))
      property = new ActionProperty(property);
    this.action = action;
    this.action_property = property;
    return this;
  }
  event(event){
    if(!(event instanceof RegisterEvent))
      event = new RegisterEvent(event);
    this.register_events = this.register_events || [];
    this.register_events.push(event);
    return this;
  }
  wait(){
    this.open_mic = true;
    return this;
  }
  toString(){
    return JSON.stringify(this, null, 2);
  }
}

module.exports = Response;