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
    // @param r should be instanceof Rectangle or AABB
    // @see https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection#Axis-Aligned_Bounding_Box
    return (this.x < aabb.x + aabb.w && this.x + this.w > aabb.x && this.y < aabb.y + aabb.h && this.h + this.y > aabb.y);
  }
  draw(two, color) {
    two.draw('rect', 'stroke', color, this.x, this.y, this.w, this.h);
  }
}
