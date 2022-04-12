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

const { describe } = require("yargs");

function strictEquals(a, b) {
  describe(
    "When compared: " + a + " with: " + b + " strictEquals function returns",
    () => {
      test("Test expected results", () => {
        switch (a) {
          case 1:
            switch (b) {
              case 1:
                expect(Object.is(a, b)).toBe(true);
                break;
              case "1":
                expect(Object.is(a, b)).toBe(false);
                break;
            }
            break;
          case Nan:
            if (b === Nan) {
              expect(Object.is(a, b)).toBe(false);
            }
            break;
        }
      });
    }
  );
  if (Object.is(a, b)) {
    return true;
  }
  return false;
  describe;
}

console.log(strictEquals(-0, 0));
