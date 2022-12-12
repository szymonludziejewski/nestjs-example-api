import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get()
  getExampleApiTest(): string {
    return 'Example API test';
  }
}
