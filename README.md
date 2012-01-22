vtha
===================================

nano-weight middleware for node.js

inspired by rack, connect and fab.


usage
-------------------------------------

middleware is defined as a function that accepts status. headers and body parameters and returns an array containing status, headers and a body.

    function hello(status, headers, body) {
      return [200, {"Content-Type": "text/plain"}, "hello"]
    }

The raw request and response can be accessed via this.env:

    function hello(status, headers, body) {
      var req = this.env.req;
      var res = this.env.res;
      return [200, {"Content-Type": "text/plain"}, "hello"]
    }


Both parameters and return values are optional.
This is useful for intercepting or injecting into the node environment.

    function display() {
      var req = this.env.req;
      console.log();
      console.log(req.method, req.url);
      console.log();
    }


Middleware is stacked together:

    (stack)
      (timer)
      (hello)
      (test);

Each function being passed the [status, headers, body] output of the previous function in the stack

Run "node vtha.js" to see in action on port 4242
