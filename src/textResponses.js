const hello = 'Hello World!';

// create a time string 
const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`; 
  return dateString;
};

// generate the time, will be generated with a staus code of 200 (success)
const getTime = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(getTimeString());
  response.end();
};

// generate the hello message, will be generated with a staus code of 200 (success)
const getHello = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(hello);
  response.end();
};

// export our message with the hello message and our functions for the time 
module.exports = {
  hello,
  getTimeString,
  getHello,
  getTime,
};
