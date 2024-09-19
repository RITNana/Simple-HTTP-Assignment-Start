const text = require('./textResponses.js'); // import our file

// our hello message will be a JSON 0bject
const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

// our time will be a JSON object
const getTimeJSON = (request, response) => {
  const timeJSON = {
    time: text.getTimeString(),
  };

  const stringMessage = JSON.stringify(timeJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

// export both functions
module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
