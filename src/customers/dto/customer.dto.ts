import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  contacto: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  cedula: string;

  @IsString()
  @IsOptional()
  @MaxLength(300)
  direccion: string;

}
