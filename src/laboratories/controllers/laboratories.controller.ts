import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateLaboratoryDto } from "../dto/laboratory.dto";
import { LaboratoriesService } from "../services/laboratories.service";


@Controller('laboratories')
export class LaboratoriesController
{
    constructor(private readonly laboratoriesService:LaboratoriesService){}
    
    @Post()
    async CreateLaboratory(@Body() createLaboratoryDto: CreateLaboratoryDto){
        return this.laboratoriesService.create(createLaboratoryDto);
    }

    
    @Get()
    findAll(){
        return this.laboratoriesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.laboratoriesService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.laboratoriesService.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createLaboratoryDto :CreateLaboratoryDto,
        
    )
    {
        return this.laboratoriesService.update(id, createLaboratoryDto)
    }
}