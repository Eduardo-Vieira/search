const restify = require('restify');
const routes = require('../app/routes/route');
const constant = require('../app/constants/constant');

const cors = require('../app/middleware/cors');

const server = restify.createServer();

server.use(restify.plugins.queryParser());

server.pre(cors.preflight)
server.use(cors.actual)

routes(server);

server.listen(constant.port, function() {
  console.log('%s listening at %s', server.name, server.url);
});