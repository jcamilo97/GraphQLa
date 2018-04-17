import { Module } from '@nestjs/common';
import { VampireController } from './vampire.controller';
import { VampireService } from './vampire.service';
import { VampireSchema } from './schemas/vampire.schema';
import { vampiresProviders } from './vampire.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [VampireController],
  components: [VampireService, ...vampiresProviders],
})
export class VampireModule {}