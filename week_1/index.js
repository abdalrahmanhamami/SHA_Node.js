var http = require("http");
var fs = require('fs')
var state = 10;

http.createServer((req, res)=> {
    res.writeHead(200, {"Content-Type": "text/html"});

switch(res){

    case '/state':
    state;
    res.write(`<h4>current state ${state}`)
    console.log(`${state}`);
    break;

    case '/add':
    state;
    res.write(`<h4>adding one: ${state + 1}`)
    console.log(`${state}`);
    break;

    case 'subtract':
    state;
    res.write(`<h4>subtracting one: ${state - 1}`)
    console.log(`${state}`);
    break;
    
    case 'reset':
    state = 10 ;
    res.write(`<h4>Resetting the state: ${state}`)
    console.log(`${state}`);
    break;

    default:
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write('404 not found')
}
       res.end()
    console.log('request was made: '+ req.url)
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');