import { IsArray, ArrayMinSize, ArrayMaxSize, IsNumber } from 'class-validator';

export class AprobacionDto {
  @IsArray()
  @ArrayMinSize(3)
  @ArrayMaxSize(5)
  @IsNumber({}, { each: true })
  notas: number[];

  @IsNumber()
  notaMinima: number;
}
