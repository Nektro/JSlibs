"use strict";
class Game {
  constructor() {
    this.fps = arguments[0];
    this.everyE = arguments[1];
    this.states = Array.prototype.slice.call(arguments).splice(2);
    this.activeState = Math.min(0, this.states.length);
    this.isRunning = false;
    this.lastTime = new Date().getTime();
  }
  run() {
    this.isRunning = true;
    if (this.isRunning) {
      var t = new Date().getTime();
      if (t - this.lastTime > 1000 / this.fps) {
        this.lastTime = t;
        this.everyE();
        this.states[this.activeState].update();
      }
      var that = this;
      requestAnimationFrame(that.run.bind(this));
    }
  }
}
class GameState {
  constructor(u,r) {
    this.update = u | function(){};
    this.render = r | function(){};
  }
}
