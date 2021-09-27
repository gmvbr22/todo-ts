import {FastifyInstance} from 'fastify';

async function service(fastify: FastifyInstance) {
  fastify.get('/', async () => {
    return 'Hello world';
  });
}

export default service;
