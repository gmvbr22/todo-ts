import {Config} from './config';
import {Server} from './server';

async function main() {
  const config = new Config();
  const server = new Server(config);
  await server.listen();
}

main();
