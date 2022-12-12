import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [PetsModule],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {}
