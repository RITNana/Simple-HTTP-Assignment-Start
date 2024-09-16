const fs = require('fs');
// const { get } = require("http")
// const { dirname } = require("path")

const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(image);
  response.end();
};

module.exports.getImage = getImage;
