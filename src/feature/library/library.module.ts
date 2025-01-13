import { Module } from '@nestjs/common';
import { LibraryController } from './library.controller';
import { LibraryService } from './library.service';  
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Library } from './entity/library.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Library])],
  controllers: [LibraryController],
  providers: [LibraryService],  
  exports: [LibraryService],
})
export class LibraryModule {}
