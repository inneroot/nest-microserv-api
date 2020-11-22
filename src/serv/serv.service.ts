import { Inject, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

const microserviceOptions: ClientOptions = {
  transport: Transport.NATS,
  options: {
    url: 'nats://localhost:4222',
  },
}

@Injectable()
export class ServService {
  private logger = new Logger('API service')

  constructor(
    @Inject('NATS') private client: ClientProxy,
  ) {}

  async getResponse(data: string) {
    this.logger.log(`getResponse: ${data}`)
    const message = data    
    this.client.emit('log', message)
    const response: any = this.client.send<string, string>('message', message )
    return response
  }
}
