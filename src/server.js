const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.Server({
    port: 9000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
  });
  server.route(routes);
  await server.start(routes);
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
