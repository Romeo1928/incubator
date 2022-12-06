// https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript

const colorOf = (r,g,b) => `#${[r,g,b].map(element => element.toString(16).padStart(2,0)).join('')}`
