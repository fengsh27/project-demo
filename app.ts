
const express = require("express");
const app = express();
const port = 9003;

app.get("/", (req:any, res:any) => {
  console.log(`end point: "/"`);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Welcome to demo project!</h1>');
  res.end();
});
app.get("/about", (req:any, res:any) => {
  console.log(`end point: "/about"`);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>About us page</h1>');
  res.end();
});
app.get("/hello", (req: any, res: any) => {
  console.log(`end point: "/hello"`);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World!</h1>');
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});


