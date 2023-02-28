//Tasks (Implement using callbacks)
//
// 1. Write a function to download data from a url.
// 2. Write a function to save that downloaded data in a file and return the filename.
// 3. Write a function to upload the file written in previous task to a new url.
function download(url, cb) {
  /**
   *Downloads content from the given url and passes the 
    downloaded content to the given callback cb
   */
  console.log("Starting to download data from", url);
  setTimeout(function down() {
    console.log("Downloading completed");
    const content = "ABCD";
    cb(content);
  }, 4000);
}
// function to write the given data to the new file
function writeFile(data, cb) {
  console.log("Started Writing a file with", data);
  setTimeout(function write() {
    console.log("Completed writing the data in a file");
    const fileName = "File.txt";
    cb(fileName);
  }, 5000);
}
// upload the data from a file to a given url
function upload(url, file, cb) {
  console.log("Started uploading this", file, "on", url);
  setTimeout(function up() {
    console.log("File Uploaded");
    const respose = "Success";
    cb(respose);
  }, 2000);
}

download("www.xyz.in", function processDownload(content) {
  console.log("Downloaded data is", content);
  writeFile("abcdef", function processWrite(Name) {
    console.log("file with name:", Name);
    upload("www.xyzNew.com", Name, function processUpload(respose) {
      console.log("we have uploaded with respose", respose);
    });
  });
});
