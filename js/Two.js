"use strict";
class TWO {
  constructor(canvas) {
    // @param this.c should be instanceof CanvasRenderingContext2D
    this.c = canvas.getContext('2d');
  }
  clear() {
    this.c.clearRect(0, 0, this.c.canvas.width, this.c.canvas.height);
  }
  draw(s, m, c, x, y, p1, p2) {
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

  // // // //

  // draws a rectangle
  // color, x, y, width, height
  fillRect(c, x, y, w, h) {
    this.c.fillStyle = c;
    this.c.fillRect(x,y,w,h);
  };
  // draw text on the screen
  drawText(color, x, y, text) {
    this.c.fillStyle = color;
    this.c.fillText(text, x, y);
  };
  // draw an image to the screen
  drawImage(img, a, b, c, d, e, f, g, h) {
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
}
