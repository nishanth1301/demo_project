import {
  IsAlpha,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  Validate,
} from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone_number: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsDateString()
  date_of_birth: Date;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}
