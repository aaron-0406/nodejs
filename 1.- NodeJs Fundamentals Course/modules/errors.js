function thatBreak() {
  return 3 + z;
}

try {
  thatBreak();
} catch (error) {
  console.error("Some bug");
  console.error(error);
}

///////////////////////////////

// ASYNC FUNCTION

function otherFunction() {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Error in async function");
      callback(error);
    }
  });
}

try {
  otherFunction(function (error) {
    console.log(error.message);
  });
} catch (error) {
  console.error("Some bug");
  console.error(error);
}
