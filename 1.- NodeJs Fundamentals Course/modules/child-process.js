const { exec, spawn } = require("child_process");

//Run any command in terminal
// Run node app
// exec("node modules/errors.js")
exec("ls -la", (error, stdout, sterror) => {
  if (error) {
    console.error(error);
    return false;
  }

  console.log(stdout);
});

let process = spawn("ls", ["-la"]);

console.log(process.pid);
console.log(process.connected);

process.stdout.on("data", function (data) {
  console.log("Is it killed?");
  console.log(process.killed);
  console.log(data);
});

process.on("exit", function () {
  console.log("The process has finished");
  console.log("Is it killed?");
  console.log(process.killed);
});
