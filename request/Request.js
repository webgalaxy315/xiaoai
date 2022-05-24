const SlotInfo = require('./SlotInfo');

class Request {
  constructor(request){
    Object.assign(this, request);
    const { slot_info } = request;
    slot_info && (this.slot_info = new SlotInfo(slot_info));
  }
}

module.exports = Request;