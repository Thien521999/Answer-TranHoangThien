function api(result, fn) {
  return fn(result);
}
function api1(result, fn) {
  return fn(result + 1);
}
function api2(result, fn) {
  return fn(result + 2);
}

function main() {
  api(1, function (result) {
    console.log("result:  ", result);
    api1(result, function (result2) {
      console.log("result2:  ", result2);
      api2(result, function (result3) {
        console.log("result3:  ", result3);
      });
    });
  });
}
main();
