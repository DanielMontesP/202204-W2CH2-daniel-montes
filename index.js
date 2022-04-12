//aqui va el cod js
function strictEquals(a, b) {
  if (Object.is(a, b)) {
    return true;
  }
}

console.log(strictEquals(1, 1));
