const AudioStream = require('./AudioStream');

class AudioItem {
  constructor(stream){
    if(!(stream instanceof AudioStream))
      stream = new AudioStream(stream);
    this.stream = stream;
    return this;
  }
}

module.exports = AudioItem;