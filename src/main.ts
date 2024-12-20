import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { APP_PORT } from './config/server.const';
import { generateSwagger } from './config/generate-swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>(APP_PORT as any) ?? 3000;

  generateSwagger(app);

  await app.listen(port);
}
bootstrap().then(() => console.log('Server executed'));
