import { Module } from '@nestjs/common';
import { EntitiesModule } from '../entities/entities.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [EntitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
