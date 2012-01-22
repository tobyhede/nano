var http = require("http");


function display() {
  var req = this.env.req;
  console.log();
  console.log(req.method, req.url);
  console.log();
}


function timer() {
  var env = this.env;
  var req = env.req;
  var res = env.res;
  var end = res.end;

  var startTime = new Date;

  res.end = function(data, encoding){
     res.end = end;
     res.end(data, encoding);
     endTime = new Date
     console.log();
     console.log(req.method, req.url);
     console.log('response time:', (endTime - startTime) + 'ms');
     console.log();
  };


}


function hello(status, headers, body) {
  console.log("hello")
  return [200, {"Content-Type": "text/plain"}, "hello"]
}

function test(status, headers, body) {
  console.log("test")
  return [status, headers, body];
}


function toArray(args) {
  var args = Array.prototype.slice.call(args, 0);
  return args;
}


function stack() {
  var STATUS = 0;
  var HEADERS = 1;
  var BODY = 2

  var stack = [];

  function handler(req, res) {
    var env = {env: {req: req, res: res}};

    var out = [200, {}, ""];
    var len = stack.length;

    for (var i = 0; i < len; i++) {
      _out = stack[i].apply(env, out);
      if (_out) out = _out;
    }
    res.write(out[BODY])
    res.end();
  }

  http.createServer(handler).listen(4242)

  return stackify.apply(this, arguments);

  console.log(arguments[0].constructor.name)
  function stackify() {

    var args = toArray(arguments);
    stack.push(args.pop())
    return stackify;
  };

}

console.log("=======================================");
(stack)
  (timer)
  (hello)
  (test);



// (route)
//   ({get: "test", action: hello})
//   ({get: "hello", action: hello});

  // (/test/)
  // (blah, 42)
  // (foo);



