import { UserModel } from '../model/user.model';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateUserDto implements Omit<UserModel, 'id'> {
  @IsNumber()
  @Min(18)
  @Max(70)
  age: number = 18;

  @IsString()
  @IsNotEmpty()
  name: string;
}
