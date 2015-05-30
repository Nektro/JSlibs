function Pencil (context) {
  this.con = context;
  this.rect = {};
  this.rect.draw = function (x, y, width, height) {
    this.con.beginPath();
    this.con.moveTo(x, y);
    this.con.lineTo(x + width, y);
    this.con.lineTo(x + width, y + height);
    this.con.lineTo(x, y + height);
  };
  this.rect.stroke = function (color, x, y, width, height) {this.con.strokeStyle = color, this.rect.draw(x,y,width,height); this.con.stroke(); };
  this.rect.fill = function (color, x, y, width, height) { this.con.fillStyle = color, this.rect.draw(x,y,width,height); this.fill(); };
  
  this.triangle = {};
  this.triangle.draw = function (x1, y1, x2, y2, x3, y3) {
      this.con.beginPath();
      this.con.moveTo(x1, y1);
      this.con.lineTo(x2, y2);
      this.con.lineTo(x3, y3);
  };
  this.triangle.stroke = function (color, x1, y1, x2, y2, x3, y3) { this.con.strokeStyle = color; this.triangle.draw(x1,y1,x2,y2,x3,y3); this.stroke(); };
  this.triangle.fill =  function (color, x1, y1, x2, y2, x3, y3) { this.con.fillStyle = color; this.triangle.draw(x1,y1,x2,y2,x3,y3); this.fill(); };
  
  this.arc = {};
  this.arc.draw = function (x, y, r, sa, ea, acl) {
    this.con.beginPath();
    this.con.arc(x,y,r,sa,ea,acl);
  };
  this.arc.stroke = function (color, x, y, r, sa, ea, acl) {
    this.con.strokeStyle = color;
    this.arc.draw(x,y,r,sa,ea,acl);
    this.con.stroke();
  };
  this.arc.fill = function (color, x, y, r, sa, ea, acl) {
    this.con.fillStyle = color;
    this.arc.draw(x,y,r,sa,ea,acl);
    this.con.fill();
  };
  
  this.circle = {};
  this.circle.stroke = function (color, x, y, r) {
    this.con.strokeStyle = color;
    this.arc.draw(x,y,r,0,Math.PI*2,false);
    this.con.stroke();
  };
  this.circle.fill = function (color, x, y, r) {
    this.con.fillStyle = color;
    this.arc.draw(x,y,r,0,Math.PI*2,false);
    this.con.fill();
  };
}
