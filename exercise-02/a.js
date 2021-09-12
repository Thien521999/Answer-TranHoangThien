// callback hell
const api = (fn) => fn(1);
const api1 = (fn) => fn(2);
const api2 = (fn) => fn(3);

function main() {
  api(function (result) {
    console.log("result:  ", result);
    api1(function (result2) {
      console.log("result2:  ", result2);
      api2(function (result3) {
        console.log("result3:  ", result3);
      });
    });
  });
}
main();
