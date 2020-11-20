import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

const microserviceOptions: ClientOptions = {
  transport: Transport.NATS,
  options: {
    url: 'nats://localhost:4222',
  },
}

@Injectable()
export class AppService {
  private client: ClientProxy;
  private logger = new Logger('API service')

  constructor(){
    this.client = ClientProxyFactory.create(microserviceOptions)
  }

  async getResponse(data: string) {
    this.logger.log(`getResponse: ${data}`)
    return await this.client.send<string, Object>('message', { msg: data})
  }
}
