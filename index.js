// console.log(strictEquals(1, 1));  TRUE!
//console.log(strictEquals(NaN, NaN)); FALSE?
// console.log(strictEquals(0, -0)); TRUE?
//console.log(strictEquals(-0, 0)); TRUE?
//console.log(strictEquals(1, "1")); FALSE!
//console.log(strictEquals(true, false)); FALSE!
//console.log(strictEquals(true, false)); FALSE!
//console.log(strictEquals(false, false)); TRUE!
//console.log(strictEquals("Water", "oil")); FALSE!
//PRUEBAS

function strictEquals(a, b) {
  if (Object.is(a, b)) {
    return true;
  }
  return false;
}

console.log(strictEquals(-0, 0));
