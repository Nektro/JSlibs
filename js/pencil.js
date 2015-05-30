function Pencil(context) {
  this.con = context;
  this.drawRect = function (color, x, y, width, height) {
    this.con.fillStyle = color;
    this.con.drawRect(x, y, width, height);
  };
}
