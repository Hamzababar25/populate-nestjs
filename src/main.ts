import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UseModule } from './use.modules';

async function bootstrap() {
  const app = await NestFactory.create(UseModule);
  await app.listen(3000);
}
bootstrap();
