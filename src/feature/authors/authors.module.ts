import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Author } from './author.entity';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';

@Module({
  imports: [MikroOrmModule.forFeature([Author])], // Importa la entidad
  controllers: [AuthorsController], // Controlador para rutas
  providers: [AuthorsService], // Servicio para la lógica de negocio
})
export class AuthorsModule {}
