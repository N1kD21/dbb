import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateDto {
  @IsArray()
  num: Array<number>;
}
