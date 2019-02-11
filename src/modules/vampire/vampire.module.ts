import { Module } from '@nestjs/common';
import { VampireController } from './vampire.controller';
import { VampireService } from './vampire.service';
import { VampireSchema } from './schemas/vampire.schema';
import { vampiresProviders } from './vampire.provider';
import { vampiresResolver } from './vampire.resolver';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [VampireService, vampiresResolver, ...vampiresProviders],
})
export class VampireModule {}