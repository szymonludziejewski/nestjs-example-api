import { Controller, Get } from '@nestjs/common';

@Controller('pets')
export class PetsController {
  @Get()
  getExampleTestFromModule(): string {
    return 'pets example'
  }
}
