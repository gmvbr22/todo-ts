import envSchema from 'env-schema';

export class Config {
  public port = 8080;
  public host = '0.0.0.0';

  constructor() {
    const env = envSchema({
      schema: {
        type: 'object',
        properties: {
          HOST: {
            type: 'string',
            default: '0.0.0.0',
          },
          PORT: {
            type: 'number',
            default: 8080,
          },
        },
        required: ['HOST', 'PORT'],
      },
    });
    this.port = env.PORT as number;
    this.host = env.HOST as string;
  }
}
