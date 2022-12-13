import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST,
})
export class PetsService {
  private pets: Array<String> = ['cat', 'dog', 'turtle'];

  getPets(): Array<String> {
    return this.pets;
  }

  addNewPet(pet): void {
    this.pets.push(pet);
  }
}
