import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VampireController } from './vampire.controller';
import { VampireService } from './vampire.service';
import { VampireSchema } from './schemas/vampire.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Vampire', schema: VampireSchema }])],
  controllers: [VampireController],
  components: [VampireService],
})
export class VampireModule {}