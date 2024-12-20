import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function generateSwagger(app: INestApplication<any>) {
  const config = new DocumentBuilder()
    .setTitle('Request example')
    .setDescription('The user Request API description')
    .setVersion('0.5')
    .addTag('user')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, documentFactory);
}
