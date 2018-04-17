import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './modules/database/database.module'
import { VampireModule } from './modules/vampire/vampire.module';

@Module({
  imports: [VampireModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
