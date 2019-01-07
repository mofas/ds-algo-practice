/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
//68ms
//55%
var Vector2D = function(vec2d) {
  this.arr = [];
  for (const vec of vec2d) {
    this.arr = this.arr.concat(vec);
  }
  this.c = 0;
  this.len = this.arr.length;
};

/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function() {
  return this.c < this.len;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function() {
  return this.arr[this.c++];
};

const v2d = new Vector2D([[1, 2], [3], [4, 5, 6]]);

console.log(v2d.next());
console.log(v2d.next());
console.log(v2d.next());
console.log(v2d.next());
console.log(v2d.next());
console.log(v2d.hasNext());
console.log(v2d.next());
console.log(v2d.hasNext());
