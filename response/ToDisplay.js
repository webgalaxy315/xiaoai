class ToDisplay {
  constructor(display){
    if(typeof display === 'string'){
      display = {
        text: display
      };
    }
    Object.assign(this, { type: 0 }, display);
  }
}

module.exports = ToDisplay;