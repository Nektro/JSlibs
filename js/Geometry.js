"use strict";
class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w; // width
    this.h = h; // height
  }
  getArea() {
    return this.w * this.h;
  }
  overlaps(aabb) {
    // @param r instanceof Rectangle
    // @see https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection#Axis-Aligned_Bounding_Box
    return (this.x < aabb.x + aabb.w && this.x + this.w > aabb.x && this.y < aabb.y + aabb.h && this.h + this.y > aabb.y);
  }
  draw(two, color, style) {
    two.draw('rect', style | 'stroke', color, this.x, this.y, this.w, this.h);
  }
}
class Vector {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  constructor(x, y) {
    this(x, y, 0);
  }
  constructor(x) {
    this(x, 0);
  }
  constructor() {
    this(0);
  }
  // @param v instanceof Vector
  add(v) {
    return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);
  }
  // @param v instanceof Vector
  subtract(v) {
    return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
  }
  magnitude() {
    return Math.sqrt( Math.pow( this.x, 2 ) + Math.pow( this.y, 2 ) + Math.pow( this.z, 2 ) );
  }
  unitVec() {
    var m = this.magnitude();
    return new Vector(this.x / m, this.y / m, this.z / m);
  }
}
