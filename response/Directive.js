const TTSItem = require('./TTSItem');
const AudioItem = require('./AudioItem');

class Directive {
  constructor(options){
    Object.assign(this, options);
  }
  text(tts){
    if(!(tts instanceof TTSItem))
      tts = new TTSItem(tts);
    this.tts_item = tts;
    return this;
  }
  audio(stream){
    this.audio_item = new AudioItem(stream);
    return this;
  }
}

module.exports = Directive;