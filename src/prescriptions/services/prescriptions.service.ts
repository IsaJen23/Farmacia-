import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prescription } from '../entities/precription.entity';
import { CreatePrescriptionDto } from '../dto/precription.dto';

@Injectable()
export class PrescriptionsService{
    constructor(
        @InjectRepository(Prescription)
        private prescriptionRepo: Repository<Prescription>
    ){}

    async create(createPrescriptionDto:CreatePrescriptionDto){
        const customer = this.prescriptionRepo.create(createPrescriptionDto);
        await  this.prescriptionRepo.save(customer);
        return customer;
    }

    findOne(id: number){
        return this.prescriptionRepo.findOneBy({id})
    }


    findAll(){
        return   this.prescriptionRepo.find({
            order: {id: 'ASC'}
        });
    }

    async remove(id:number){
        const product =await this.findOne(id);
        await this.prescriptionRepo.remove(product);

        return 'Receta eliminada';
    }

    async update(id: number, changes: CreatePrescriptionDto){
        const oldPrescription = await this.findOne(id);
        const updatePrescription = await this.prescriptionRepo.merge(oldPrescription, changes);
        return this.prescriptionRepo.save(updatePrescription);
    }
}