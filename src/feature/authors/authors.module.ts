import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Author } from './entity/author.entity';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [MikroOrmModule.forFeature([Author]), UserModule],
  controllers: [AuthorsController],
  providers: [AuthorsService],
  exports: [AuthorsService],
})
export class AuthorsModule {}
