(function() {
  // is equivalent to s + this
  String.prototype.prepend = function(s) {
    return new String(s + this);
  };
  // replace all occurences of a String
  // @see https://stackoverflow.com/questions/1144783
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };
  // returns a new copy of an Array
  Array.prototype.copy = function() {
    var a = [];
    for (var i = 0; i < this.length; i++)
    a.push(this[i])
    return a;
  };
  // floating point linear interpolation
  // @see https://stackoverflow.com/questions/4353525
  Math.interpolate = function(a, b, f) {
    return a + f * (b - a);
  };
  // @see https://css-tricks.com/snippets/jquery/get-query-params-object/
  window.urlQuery = function () {
    var str = location.href.substring(location.origin.length + location.pathname.length);
    return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
  };
})();
