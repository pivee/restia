import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000, () => {
    Logger.log(
      `Server is running on port ${process.env.PORT ?? 3000}`,
      'NestApplication',
    );
  });
}
bootstrap();
