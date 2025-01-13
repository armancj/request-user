import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function generateSwagger(app: INestApplication<any>) {
  const config = new DocumentBuilder()
    .setTitle('Library Request example')
    .setDescription('The Library Request API description')
    .setVersion('0.7.0')
    .addTag('Library')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, documentFactory);
}
