"use strict";
class TWO {
  constructor(canvas,mode) {
    this.a = canvas;
    this.m = mode; // switch between `2d` and `webgl`
    this.c = canvas.getContext(mode);
  }
  clear() {
    if (this.m === '2d')
      this.c.clearRect(0, 0, this.c.canvas.width, this.c.canvas.height);
    if (this.m === 'webgl') {
      this.c.clearColor(0.0, 0.0, 0.0, 0.0);
      this.c.clearDepth(1.0);
      this.c.enable(this.g.DEPTH_TEST);
      this.c.depthFunc(this.g.LEQUAL);
      this.c.clear(this.g.COLOR_BUFFER_BIT | this.g.DEPTH_BUFFER_BIT);
    }
  }
  draw(s, m, c, x, y, p1, p2) {
    if (this.m === '2d') {
      this.c.beginPath();
      switch (s) {
        case 'rect': this.c.rect(x, y, p1, p2); break;
        default:
          console.error('Invalid shape to draw: ' + s);
      }
      switch (m) {
        case 'fill':   this.c.fillStyle = c;   this.c.fill();   break;
        case 'stroke': this.c.strokeStyle = c; this.c.stroke(); break;
        // no default for non-fill/stroke shapes
      }
      this.c.closePath();
    }
    if (this.m === 'webgl') // TODO
      console.log(arguments);
  }
  
  // // // //
  
  // draw text on the screen
  drawText(color, x, y, text) {
    if (this.m === '2d') {
      this.c.fillStyle = color;
      this.c.fillText(text, x, y);
    }
    if (this.m === 'webgl') // TODO
      console.log(arguments);
  };
  // draw an image to the screen
  drawImage(img, a, b, c, d, e, f, g, h) {
    if (this.m === '2d') {
    // error prevention
    if (img !== null) {
      // make it one big function by scanning for parameters
      switch (arguments.length) {
        case 3:
          // image, x, y
          this.c.drawImage(img, a, b);
          break;
        case 5:
          // image, x, y, w, h
          this.c.drawImage(img, a, b, c, d);
          break;
        case 9:
          // image, sx, sy, sw, sh, dx, dy, dw, dh
          this.c.drawImage(img, a,b,c,d,e,f,g,h);
          break;
        default:
          console.error("Invalid amount of parameters: " + arguments.length);
      }
    }
    }
    if (this.m === 'webgl') // TODO
      console.log(arguments);
  }
}
