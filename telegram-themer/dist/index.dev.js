"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// utilities
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


function HEXtoHSL(H, desat, luminance) {
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
  s = +(s * desat).toFixed(1);
  l = +(l * 100).toFixed(1);
  return "hsl(".concat(floor(h), ", ").concat(floor(s), "%, ").concat(luminance, "%)");
}

var PRIMARY_SET_LIGHT = function PRIMARY_SET_LIGHT(primary, on_primary, primary_container, on_primary_container) {
  element('#theme-box_light--primary').style.background = primary;
  element('#theme-box_light--on-primary').style.background = on_primary;
  element('#theme-box_light--primary-container').style.background = primary_container;
  element('#theme-box_light--on-primary-container').style.background = on_primary_container;
};

var PRIMARY_SET_DARK = function PRIMARY_SET_DARK(primary, on_primary, primary_container, on_primary_container) {
  element('#theme-box_dark--primary').style.background = primary;
  element('#theme-box_dark--on-primary').style.background = on_primary;
  element('#theme-box_dark--primary-container').style.background = primary_container;
  element('#theme-box_dark--on-primary-container').style.background = on_primary_container;
};

var SECONDARY_SET_LIGHT = function SECONDARY_SET_LIGHT(primary, on_primary, primary_container, on_primary_container) {
  element('#theme-box_light--secondary').style.background = primary;
  element('#theme-box_light--on-secondary').style.background = on_primary;
  element('#theme-box_light--secondary-container').style.background = primary_container;
  element('#theme-box_light--on-secondary-container').style.background = on_primary_container;
};

var SECONDARY_SET_DARK = function SECONDARY_SET_DARK(primary, on_primary, primary_container, on_primary_container) {
  element('#theme-box_dark--secondary').style.background = primary;
  element('#theme-box_dark--on-secondary').style.background = on_primary;
  element('#theme-box_dark--secondary-container').style.background = primary_container;
  element('#theme-box_dark--on-secondary-container').style.background = on_primary_container;
};

var p20, p30, p40, p70, p80, p100;
var s20, s30, s40, s70, s80, s100;

element('#colorpicker').onchange = function (e) {
  element_all('#tonal-box')[0].style.background = HEXtoHSL(e.target.value, desat = 100, luminance = 0);
  element_all('#tonal-box')[1].style.background = HEXtoHSL(e.target.value, desat = 100, luminance = 10);
  element_all('#tonal-box')[2].style.background = HEXtoHSL(e.target.value, desat = 100, luminance = 20);
  element_all('#tonal-box')[3].style.background = HEXtoHSL(e.target.value, desat = 100, luminance = 30);
  element_all('#tonal-box')[4].style.background = HEXtoHSL(e.target.value, desat = 100, luminance = 40);
  element_all('#tonal-box')[5].style.background = HEXtoHSL(e.target.value, desat = 100, luminance = 50);
  element_all('#tonal-box')[6].style.background = HEXtoHSL(e.target.value, desat = 100, luminance = 60);
  element_all('#tonal-box')[7].style.background = HEXtoHSL(e.target.value, desat = 100, luminance = 70);
  element_all('#tonal-box')[8].style.background = HEXtoHSL(e.target.value, desat = 100, luminance = 80);
  element_all('#tonal-box')[9].style.background = HEXtoHSL(e.target.value, desat = 100, luminance = 90);
  element_all('#tonal-box')[10].style.background = HEXtoHSL(e.target.value, desat = 100, luminance = 100);
  p10 = HEXtoHSL(e.target.value, desat = 100, luminance = 10);
  p20 = HEXtoHSL(e.target.value, desat = 100, luminance = 20);
  p30 = HEXtoHSL(e.target.value, desat = 100, luminance = 30);
  p40 = HEXtoHSL(e.target.value, desat = 100, luminance = 30);
  p80 = HEXtoHSL(e.target.value, desat = 100, luminance = 80);
  p90 = HEXtoHSL(e.target.value, desat = 100, luminance = 90);
  p100 = HEXtoHSL(e.target.value, desat = 100, luminance = 100);
  s10 = HEXtoHSL(e.target.value, desat = 30, luminance = 10);
  s20 = HEXtoHSL(e.target.value, desat = 30, luminance = 20);
  s30 = HEXtoHSL(e.target.value, desat = 30, luminance = 30);
  s40 = HEXtoHSL(e.target.value, desat = 30, luminance = 30);
  s80 = HEXtoHSL(e.target.value, desat = 30, luminance = 80);
  s90 = HEXtoHSL(e.target.value, desat = 30, luminance = 90);
  s100 = HEXtoHSL(e.target.value, desat = 30, luminance = 100);
  PRIMARY_SET_LIGHT(p40, p100, p90, p10);
  PRIMARY_SET_DARK(p80, p20, p30, p90);
  SECONDARY_SET_LIGHT(s40, s100, s90, s10);
  SECONDARY_SET_DARK(s80, s20, s30, s90);
};