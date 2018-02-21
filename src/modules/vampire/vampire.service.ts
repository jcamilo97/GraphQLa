import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { vampire } from './interfaces/vampire.interface';
import { CreateVampireDto } from './dto/create-vampire.dto';
import { vampireSchema } from './schemas/cat.schema';

@Component()
export class VampireService {
  constructor(@InjectModel(vampireSchema) private readonly vampireModel: Model<vampire>) {}

  async create(createVampireDto: CreateVampireDto): Promise<vampire> {
    const createdvampire = new this.vampireModel(createVampireDto);
    return await createdvampire.save();
  }

  async findAll(): Promise<vampire[]> {
    return await this.vampireModel.find().exec();
  }
}