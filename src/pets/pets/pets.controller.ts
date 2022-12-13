import { Controller, Get, Param } from '@nestjs/common';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  getExampleTestFromModule(): string {
    return this.petsService.getPets().join(', ');
  }

  @Get('/:pet')
  getExampleTestFromModuleAddPet(@Param() params): string {
    this.petsService.addNewPet(params.pet);
    return this.petsService.getPets().join(', ');
  }
}
