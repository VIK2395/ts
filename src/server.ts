// const http = require('http'); // node import
import { createServer, IncomingMessage, ServerResponse } from 'http'; // ts import

interface IDefined {
  userName: string;
  // Template literal types
  role: 'admin' | 'user';
  PI: 3.14 | 3.1415;
}

const def: IDefined = {
  userName: 'Pi',
  role: 'admin',
  PI: 3.1415,
};

console.log(def);

// Type alias
type Post = {
  title: string;
  content: string;
};

const posts: Post[] = [
  {
    title: 'Lorem ipsum',
    content: 'Dolor sit amet',
  },
];

const requestListener = function (request: IncomingMessage, response: ServerResponse) {
  switch (request.url) {
    case '/posts': {
      if (request.method === 'GET') {
        response.end(JSON.stringify(posts));
      }
      break;
    }
    default: {
      response.statusCode = 404;
      response.end();
    }
  }
};

const server = createServer(requestListener);
server.listen(8080);
