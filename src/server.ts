import fastify, {FastifyInstance} from 'fastify';
import autoload from 'fastify-autoload';
import {join} from 'path';
import {Config} from './config';

export class Server {
  private app: FastifyInstance;
  private config: Config;

  constructor(config: Config) {
    this.config = config;
    this.app = fastify({logger: true});
    this.app.register(autoload, {
      dir: join(__dirname, 'services'),
      ignorePattern: /.*(test|spec).(js|ts)/,
    });
  }

  public async listen() {
    await this.app.listen(this.config.port, this.config.host);
  }
}
