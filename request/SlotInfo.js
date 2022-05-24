const Slot = require('./Slot');

class SlotInfo {
  constructor(slot){
    Object.assign(this, slot);
    const { slots } = this;
    Array.isArray(slots) && (
      this.slots = slots.map(slot => new Slot(slot)));
  }
}

module.exports = SlotInfo;