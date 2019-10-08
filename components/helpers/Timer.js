function Timer(callback, delay) {
  var timerId,
    start,
    remaining = delay;

  this.pause = function() {
    window.clearTimeout(timerId);
    remaining -= new Date() - start;
  };

  this.resume = function() {
    start = new Date();
    window.clearTimeout(timerId);
    if (remaining > 0) {
      timerId = window.setTimeout(callback, remaining);
    }
  };

  this.resume();
}

export default Timer;
