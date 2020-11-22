import { Inject, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ReturnFromService } from './interfaces/returnFromService';

@Injectable()
export class ServService {
  private logger = new Logger('API service')

  constructor(
    @Inject('NATS') private client: ClientProxy,
  ) {}

  async getResponse(data: string) {
    // return new Promise( (resolve, reject) =>{

    // })

    this.logger.log(`getResponse: ${data}`)
    const message = data
    this.client.emit('log', message)
    //send <ReturnType, ParamType>(pattern, param)
    const response = await this.client.send<ReturnFromService, string>('message', message ).toPromise();
    const answer = response.msg + '_some_'
    return answer
  }
}
