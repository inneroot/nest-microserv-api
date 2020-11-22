import { Module } from '@nestjs/common';
import { ServModule } from './serv/serv.module';

@Module({
  imports: [
    ServModule
  ],
})
export class AppModule {}
