import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLaboratoryDto } from '../dto/laboratory.dto';
import { Laboratory } from '../entities/laboratory.entity';


@Injectable()
export class LaboratoriesService{
    constructor(
        @InjectRepository(Laboratory)
        private laboratoryRepo: Repository<Laboratory>
    ){}

    async create(createLaboratoryDto:CreateLaboratoryDto){
        const laboratory = this.laboratoryRepo.create(createLaboratoryDto);
        await  this.laboratoryRepo.save(laboratory);
        return laboratory;
    }

    findOne(id: number){
        return this.laboratoryRepo.findOneBy({id})
    }
    
    findAll(){
        return   this.laboratoryRepo.find({
            order: {id: 'ASC'},
        });
    }

    async remove(id:number){
        const brand =await this.findOne(id);
        await this.laboratoryRepo.remove(brand);
        return 'Laboratorio eliminado';
    }

    async update(id: number, changes: CreateLaboratoryDto){
        const oldLaboratory = await this.findOne(id);
        const updateLaboratory = await this.laboratoryRepo.merge(oldLaboratory, changes);
        return this.laboratoryRepo.save(updateLaboratory);
    }
}