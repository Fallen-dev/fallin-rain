const fs = require('fs')

const file = './theme_dark.attheme'

fs.readFile(file, 'utf8', function (err,data) {
  if (err) return console.log(err);

  const a1 = {
    a1_50: 'p0',
    a1_100: 'p10',
    a1_200: 'p20',
    a1_300: 'p30',
    a1_400: 'p40',
    a1_500: 'p50',
    a1_600: 'p60',
    a1_700: 'p70',
    a1_800: 'p80',
    a1_900: 'p90',
    a1_1000: 'p100',
  }

  const a2 = {
    a2_50: 's0',
    a2_100: 's10',
    a2_200: 's20',
    a2_300: 's30',
    a2_400: 's40',
    a2_500: 's50',
    a2_600: 's60',
    a2_700: 's70',
    a2_800: 's80',
    a2_900: 's90',
    a2_1000: 's100',
  }

  const a3 = {
    a3_50: 's0',
    a3_100: 's10',
    a3_200: 's20',
    a3_300: 's30',
    a3_400: 's40',
    a3_500: 's50',
    a3_600: 's60',
    a3_700: 's70',
    a3_800: 's80',
    a3_900: 's90',
    a3_1000: 's100',
  }

  const n1 = {
    n1_50: 'n0',
    r1_100: 'n10',
    n1_200: 'n20',
    n1_300: 'n30',
    n1_400: 'n40',
    n1_500: 'n50',
    n1_600: 'n60',
    n1_700: 'n70',
    n1_800: 'n80',
    n1_900: 'n90',
    n1_1000: 'n100',
  }

  const n2 = {
    n2_50: 'nv0',
    n2_100: 'nv10',
    n2_200: 'nv20',
    n2_300: 'nv30',
    n2_400: 'nv40',
    n2_500: 'nv50',
    n2_600: 'nv60',
    n2_700: 'nv70',
    n2_800: 'nv80',
    n2_900: 'nv90',
    n2_1000: 'nv100',
  }

  const re_a1 = /a1_50|a1_100|a1_200|a1_300|a1_400|a1_500|a1_600|a1_700|a1_800|a1_900|a1_1000/g
  const re_a2 = /a2_50|a2_100|a2_200|a2_300|a2_400|a2_500|a2_600|a2_700|a2_800|a2_900|a2_1000/g
  const re_a3 = /a3_50|a3_100|a3_200|a3_300|a3_400|a3_500|a3_600|a3_700|a3_800|a3_900|a3_1000/g
  const re_n1 = /n1_50|n1_100|n1_200|n1_300|n1_400|n1_500|n1_600|n1_700|n1_800|n1_900|n1_1000/g
  const re_n2 = /n2_50|n2_100|n2_200|n2_300|n2_400|n2_500|n2_600|n2_700|n2_800|n2_900|n2_1000/g

  const replace_a1 = data.replace(re_a1, (matched) => a1[matched]);
  const replace_a2 = data.replace(re_a2, (matched) => a2[matched]);
  const replace_a3 = data.replace(re_a3, (matched) => a3[matched]);
  const replace_n1 = data.replace(re_n1, (matched) => n1[matched]);
  const replace_n2 = data.replace(re_n2, (matched) => n2[matched]);

  fs.writeFile(file, replace_n2, 'utf8', function (err) {
    if (err) return console.log(err);
    console.log('successs!');
  });
});