import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VampireModule } from './modules/vampire/vampire.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/vampiresdb'), VampireModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
