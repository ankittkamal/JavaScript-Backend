//Tasks (Implement using prommises)
//
// 1. Write a function to download data from a url.
// 2. Write a function to save that downloaded data in a file and return the filename.
// 3. Write a function to upload the file written in previous task to a new url.
//
function download(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Starting to download data from", url);
    setTimeout(function down() {
      console.log("Downloading completed");
      const content = "ABCD";
      resolve(content);
    }, 7000);
  });
}
function writeFile(data) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started Writing a file with", data);
    setTimeout(function write() {
      console.log("Completed writing the data in a file");
      const fileName = "File.txt";
      resolve(fileName);
    }, 5000);
  });
}
function uploadData(file, url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started uploading this", file, "on", url);
    setTimeout(function up() {
      console.log("File Uploaded");
      const respose = "Success";
      resolve(respose);
    }, 2000);
  });
}

download("www.google.com")
  .then(function processDownload(value) {
    console.log("Downloading done with following value", value);
    return writeFile(value);
  })
  .then(function processWrite(value) {
    console.log("data written in file with name", value);
    return uploadData(value, "www.upload.in");
  })
  .then(function processUpload(value) {
    console.log("we have uploaded with value", value);
  });
