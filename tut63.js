// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World eric negi here');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pseudo selectors and more designing</title>
      <style>
  .container{
      border: 3px solid red;
      background-color: rgb(29, 231, 147);
      padding: 34px;
      margin: 34px auto;
      width: 666px;
  }
  a{
      text-decoration: none;
      color: black;
  }
  a:hover{
      color:rgb(141, 24, 24);
      background-color: rgb(236, 226, 212);
  }
  
  a:visited{
  background-color: yellow;
  }
  
  a:active{
      background-color: rgb(247, 158, 160);
  }
  .btn:hover{
      color: tomato;
      background-color: teal;
      border: solid black;
  }
  .btn{
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: bold;
      background-color: rgb(75, 11, 196);
      padding: 6px;
      border: none;
      cursor: pointer;
      font-size: 13px;
      border-radius: 4px;
  }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum atque debitis sequi eaque reprehenderit dignissimos eos placeat nostrum velit, id suscipit, qui possimus, tempore quasi vel. Quis rem optio illum id laboriosam a quibusdam!
          </p>
          <a href="https://yahoo.com" class="btn" target="_blank">Read more</a>
          <a href="https://google.com" class="btn" target="_blank">search</a>
          <button class="btn">contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});