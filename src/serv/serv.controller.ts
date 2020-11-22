import { Controller, Get } from '@nestjs/common';
import { ServService } from './serv.service';

@Controller()
export class ServController {
  constructor(private readonly servService: ServService) {}

  @Get()
  async getHello() {
    const response = await this.servService.getResponse('Hello from API');
    return response
  }
}
