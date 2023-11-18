import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PrescriptionsService } from '../services/prescriptions.service';
import { CreatePrescriptionDto } from '../dto/precription.dto';



@Controller('prescriptions')
export class PrescriptionsController {
  constructor(private readonly prescriptionsService: PrescriptionsService) {}

  @Post()
  create(@Body() createPrescriptionDto: CreatePrescriptionDto) {
    return this.prescriptionsService.create(createPrescriptionDto);
  }

  @Get()
  findAll() {
    return this.prescriptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe)id: number) {
    return this.prescriptionsService.findOne(id);
  }

 
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe)id: number,
    @Body()createPrescriptionDto :CreatePrescriptionDto,
        
  )
  {
    return this.prescriptionsService.update(id, createPrescriptionDto)
  }


  @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
    return this.prescriptionsService.remove(id);
  }

  
}
