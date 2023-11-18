import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from 'class-validator';

export class CreateLaboratoryDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;

  @IsDateString()
  @IsOptional()
  created_at: string;

}
