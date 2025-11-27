import { IsArray, ArrayMinSize, ArrayMaxSize, IsNumber } from 'class-validator';

export class HorasSemanalesDto {
  @IsArray()
  @ArrayMinSize(7)
  @ArrayMaxSize(7)
  @IsNumber({}, { each: true })
  horasPorDia: number[];
}
