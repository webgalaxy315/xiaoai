
class AudioStream {
  constructor({ url, offset_in_milliseconds, token }){
    this.url = url;
    this.token = token;
    this.offset_in_milliseconds = offset_in_milliseconds;
  }
}

module.exports = AudioStream;