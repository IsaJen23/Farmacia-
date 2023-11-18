import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Laboratory } from './entities/laboratory.entity';
import { LaboratoriesService } from './services/laboratories.service';
import { LaboratoriesController } from './controllers/laboratories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Laboratory])],
  controllers: [LaboratoriesController ],
  providers: [LaboratoriesService]
})
export class LaboratoriesModule {}

