import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vampire } from './interfaces/vampire.interface';
import { CreateVampireDto } from './dto/create-vampire.dto';
import { VampireSchema } from './schemas/vampire.schema';

@Component()
export class VampireService {
  constructor(@InjectModel(VampireSchema) private readonly vampireModel: Model<Vampire>) {}

  async create(createVampireDto: CreateVampireDto): Promise<Vampire> {
    const createdvampire = new this.vampireModel(createVampireDto);
    return await createdvampire.save();
  }

  async findAll(): Promise<Vampire[]> {
    return await this.vampireModel.find().exec();
  }
}