import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateCursoDto {
  @IsString()
  codigo: string;

  @IsString()
  titulo: string;

  @IsString()
  subtitulo: string;

  @IsString()
  descripcion: string;

  @IsString()
  nivel: string;

  @IsNumber()
  duracion_horas: number;

  @IsNumber()
  costo: number;

  @IsString()
  modalidad: string;

  @IsDateString()
  fecha_inicio: string;

  @IsString()
  estado: string;
}
