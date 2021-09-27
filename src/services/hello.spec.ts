import 'mocha';
import {expect} from 'chai';
import fastify from 'fastify';
import service from './hello';

describe('Test: Service', () => {
  const app = fastify().register(service);

  before(async () => {
    await app.listen(0);
  });

  after(async () => {
    await app.close();
  });

  it("expect response: 'Hello World'", async () => {
    const request = await app.inject({
      url: '/',
      method: 'GET',
    });
    expect(request.body).to.equal('Hello world');
  });
});
