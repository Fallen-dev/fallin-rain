"use strict";

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
} // utilities


var element = function element(selector) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return type.querySelector(selector);
};

var element_all = function element_all(selector) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return _toConsumableArray(type.querySelectorAll(selector));
};

var print = function print() {
  var _console;

  return (_console = console).log.apply(_console, arguments);
};

var floor = function floor(value) {
  return Math.floor(value);
}; // main starts here


function HEXtoHSL(H) {
  // Convert hex to RGB first
  var r = 0,
      g = 0,
      b = 0;

  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  } // Then to HSL


  r /= 255;
  g /= 255;
  b /= 255;
  var cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
  if (delta == 0) h = 0;else if (cmax == r) h = (g - b) / delta % 6;else if (cmax == g) h = (b - r) / delta + 2;else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return "hsl(".concat(floor(h), ", ").concat(floor(s), "%, ").concat(floor(l), "%)");
}

function getColor() {
  element('#colorpicker').onchange = function (e) {
    return element_all('#tonal-box').forEach(function (el) {
      return el.style.background = HEXtoHSL(e.target.value);
    });
  };
}

getColor();