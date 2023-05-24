import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { Logger } from '@nestjs/common';
import * as cp from 'child_process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV !== 'production') {
    cp.execSync('npx nestia swagger');
  }

  await app.listen(process.env.PORT ?? 3000, () => {
    Logger.log(
      `Server is running on port ${process.env.PORT ?? 3000}`,
      'NestApplication',
    );
  });
}
bootstrap();
