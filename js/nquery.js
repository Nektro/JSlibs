jQuery.fn.setClass = function(name) {
    $(this).removeClass().addClass(name);
};
String.prototype.prepend = function(s) {
    return new String(s + this);
};
