import {
  IsAlpha,
  IsDateString,
  IsEmail,
  IsNumber,
  IsPhoneNumber,
} from 'class-validator';

export class upadateTaskDto {
  @IsAlpha()
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone_number: string;

  @IsDateString()
  date_of_birth: Date;

  @IsNumber()
  age: number;
}
