import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const NEST_PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(NEST_PORT);
}
bootstrap();
