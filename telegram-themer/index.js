// utilities
const element = (selector, type=document) => type.querySelector(selector)
const element_all = (selector, type=document) => [...type.querySelectorAll(selector)]
const print = (...text) => console.log(...text)
const floor = value => Math.floor(value)

// main starts here
function HEXtoHSL(H, desat, luminance) {
  // Convert hex to RGB first
  let r = 0,
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
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * desat).toFixed(1);
  l = +(l * 100).toFixed(1);

  return `hsl(${floor(h)}, ${floor(s)}%, ${luminance}%)`
}

const PRIMARY_SET_LIGHT = (primary, on_primary, primary_container, on_primary_container) => {
  element('#theme-box_light--primary').style.background = primary
  element('#theme-box_light--on-primary').style.background = on_primary
  element('#theme-box_light--primary-container').style.background = primary_container
  element('#theme-box_light--on-primary-container').style.background = on_primary_container
}

const PRIMARY_SET_DARK = (primary, on_primary, primary_container, on_primary_container) => {
  element('#theme-box_dark--primary').style.background = primary
  element('#theme-box_dark--on-primary').style.background = on_primary
  element('#theme-box_dark--primary-container').style.background = primary_container
  element('#theme-box_dark--on-primary-container').style.background = on_primary_container
}

const SECONDARY_SET_LIGHT = (primary, on_primary, primary_container, on_primary_container) => {
  element('#theme-box_light--secondary').style.background = primary
  element('#theme-box_light--on-secondary').style.background = on_primary
  element('#theme-box_light--secondary-container').style.background = primary_container
  element('#theme-box_light--on-secondary-container').style.background = on_primary_container
}

const SECONDARY_SET_DARK = (primary, on_primary, primary_container, on_primary_container) => {
  element('#theme-box_dark--secondary').style.background = primary
  element('#theme-box_dark--on-secondary').style.background = on_primary
  element('#theme-box_dark--secondary-container').style.background = primary_container
  element('#theme-box_dark--on-secondary-container').style.background = on_primary_container
}

element('#colorpicker')
.onchange = e => {
  element_all('#tonal-box')[0].style.background = HEXtoHSL(e.target.value, desat=100, luminance = 0)
  element_all('#tonal-box')[1].style.background = HEXtoHSL(e.target.value, desat=100, luminance = 10)
  element_all('#tonal-box')[2].style.background = HEXtoHSL(e.target.value, desat=100, luminance = 20)
  element_all('#tonal-box')[3].style.background = HEXtoHSL(e.target.value, desat=100, luminance = 30)
  element_all('#tonal-box')[4].style.background = HEXtoHSL(e.target.value, desat=100, luminance = 40)
  element_all('#tonal-box')[5].style.background = HEXtoHSL(e.target.value, desat=100, luminance = 50)
  element_all('#tonal-box')[6].style.background = HEXtoHSL(e.target.value, desat=100, luminance = 60)
  element_all('#tonal-box')[7].style.background = HEXtoHSL(e.target.value, desat=100, luminance = 70)
  element_all('#tonal-box')[8].style.background = HEXtoHSL(e.target.value, desat=100, luminance = 80)
  element_all('#tonal-box')[9].style.background = HEXtoHSL(e.target.value, desat=100, luminance = 90)
  element_all('#tonal-box')[10].style.background = HEXtoHSL(e.target.value, desat=100, luminance = 100)


  let p0 = HEXtoHSL(e.target.value, desat=100, luminance = 0)
  let p10 = HEXtoHSL(e.target.value, desat=100, luminance = 10)
  let p20 = HEXtoHSL(e.target.value, desat=100, luminance = 20)
  let p30 = HEXtoHSL(e.target.value, desat=100, luminance = 30)
  let p40 = HEXtoHSL(e.target.value, desat=100, luminance = 40)
  let p50 = HEXtoHSL(e.target.value, desat=100, luminance = 50)
  let p60 = HEXtoHSL(e.target.value, desat=100, luminance = 60)
  let p70 = HEXtoHSL(e.target.value, desat=100, luminance = 70)
  let p80 = HEXtoHSL(e.target.value, desat=100, luminance = 80)
  let p90 = HEXtoHSL(e.target.value, desat=100, luminance = 90)
  let p100 = HEXtoHSL(e.target.value, desat=100, luminance = 100)

  let s0 = HEXtoHSL(e.target.value, desat=40, luminance = 0)
  let s10 = HEXtoHSL(e.target.value, desat=40, luminance = 10)
  let s20 = HEXtoHSL(e.target.value, desat=40, luminance = 20)
  let s30 = HEXtoHSL(e.target.value, desat=40, luminance = 30)
  let s40 = HEXtoHSL(e.target.value, desat=40, luminance = 40)
  let s50 = HEXtoHSL(e.target.value, desat=40, luminance = 50)
  let s60 = HEXtoHSL(e.target.value, desat=40, luminance = 60)
  let s70 = HEXtoHSL(e.target.value, desat=40, luminance = 70)
  let s80 = HEXtoHSL(e.target.value, desat=40, luminance = 80)
  let s90 = HEXtoHSL(e.target.value, desat=40, luminance = 90)
  let s100 = HEXtoHSL(e.target.value, desat=40, luminance = 100)

  let n0 = HEXtoHSL(e.target.value, desat=10, luminance = 0)
  let n10 = HEXtoHSL(e.target.value, desat=10, luminance = 10)
  let n20 = HEXtoHSL(e.target.value, desat=10, luminance = 20)
  let n30 = HEXtoHSL(e.target.value, desat=10, luminance = 30)
  let n40 = HEXtoHSL(e.target.value, desat=10, luminance = 40)
  let n50 = HEXtoHSL(e.target.value, desat=10, luminance = 50)
  let n60 = HEXtoHSL(e.target.value, desat=10, luminance = 60)
  let n70 = HEXtoHSL(e.target.value, desat=10, luminance = 70)
  let n80 = HEXtoHSL(e.target.value, desat=10, luminance = 80)
  let n90 = HEXtoHSL(e.target.value, desat=10, luminance = 90)
  let n100 = HEXtoHSL(e.target.value, desat=10, luminance = 100)

  let nv0 = HEXtoHSL(e.target.value, desat=25, luminance = 0)
  let nv10 = HEXtoHSL(e.target.value, desat=25, luminance = 10)
  let nv20 = HEXtoHSL(e.target.value, desat=25, luminance = 20)
  let nv30 = HEXtoHSL(e.target.value, desat=25, luminance = 30)
  let nv40 = HEXtoHSL(e.target.value, desat=25, luminance = 40)
  let nv50 = HEXtoHSL(e.target.value, desat=25, luminance = 50)
  let nv60 = HEXtoHSL(e.target.value, desat=25, luminance = 60)
  let nv70 = HEXtoHSL(e.target.value, desat=25, luminance = 70)
  let nv80 = HEXtoHSL(e.target.value, desat=25, luminance = 80)
  let nv90 = HEXtoHSL(e.target.value, desat=25, luminance = 90)
  let nv100 = HEXtoHSL(e.target.value, desat=25, luminance = 100)


  PRIMARY_SET_LIGHT(p40, p100, p90, p10)
  PRIMARY_SET_DARK(p80, p20, p30, p90)

  SECONDARY_SET_LIGHT(s40, s100, s90, s10)
  SECONDARY_SET_DARK(s80, s20, s30, s90)

}