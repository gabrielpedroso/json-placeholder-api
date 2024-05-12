import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NotFoundErrorFilter } from './not-found-error/not-found-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new NotFoundErrorFilter());

  await app.listen(3001);
}
bootstrap();
