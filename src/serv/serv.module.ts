import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServController } from './serv.controller';
import { ServService } from './serv.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS',
        transport: Transport.NATS,
        options: {
          url: 'nats://localhost:4222',
        }
      },
    ]),
  ],
  providers: [ServService],
  controllers: [ServController],
})
export class ServModule {}
