const fs = require('fs'); // pull in the file system 

// read a file asynchronously and return the file path
const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// pass in a response and request
// write the status code for a successful file loaded, along with the contet-type header
// end the response 
const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(image);
  response.end();
};

// output our getImage function 
module.exports.getImage = getImage;
