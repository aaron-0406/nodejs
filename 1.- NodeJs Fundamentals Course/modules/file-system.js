// FILE SYSTEM -> will be executed in a async method

const fs = require("fs");
//const fs = require("fs").promises; // with promeises

/* const readWithPromises = async () => {
  try {
    const data = await fs.readFile(route);
    return data.toString();
  } catch (error) {
    console.error(error);
  }
}; */

const readFile = (route, callback) => {
  fs.readFile(route, (error, data) => {
    // Returns a Buffer
    console.log(data);

    // Returns the text
    console.log(data.toString());
  });
};

const writeFile = (route, content, callback) => {
  fs.writeFile(route, content, (error) => {
    if (error) {
      console.error("I can't write");
    } else {
      console.log("It was written");
    }
  });
};

const deleteFile = (route, callback) => {
  fs.unlink(route, callback);
};

readFile(__dirname + "/file-system.txt", console.log);
writeFile(__dirname + "/file1.pdf", "Hello, I'm aaron.", console.log);
deleteFile(__dirname + "/file1.pdf", console.log);
