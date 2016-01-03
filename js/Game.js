"use strict";
class Game {
  // (int fps, function every, GameState... states)
  constructor() {
    this.fps = arguments[0];
    this.everyE = arguments[1]; // called during every state
    this.states = Array.prototype.slice.call(arguments).splice(2);
    this.activeState = Math.min(0, this.states.length);
    this.isRunning = false;
    this.lastTime = new Date().getTime();
  }
  start() {
    this.isRunning = true;
    this.run();
  }
  stop() {
    this.isRunning = false;
  }
  run() {
    if (this.isRunning) {
      var t = new Date().getTime();
      this.everyE();
      if (t - this.lastTime > 1000 / this.fps) {
        this.lastTime = t;
        this.states[this.activeState].update();
      }
      this.states[this.activeState].render();
      var that = this;
      requestAnimationFrame(that.run.bind(this));
    }
  }
}
class GameState {
  // (function update, function render)
  constructor(u,r) {
    this.update = u | function(){};
    this.render = r | function(){};
  }
}
