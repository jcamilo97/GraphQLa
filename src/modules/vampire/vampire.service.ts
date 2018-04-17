import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Vampire } from './interfaces/vampire.interface';
import { CreateVampireDto } from './dto/create-vampire.dto';


@Component()
export class VampireService {
  constructor(@Inject('VampireModelToken') private readonly vampireModel: Model<Vampire>) {}

  async create(createVampireDto: CreateVampireDto): Promise<Vampire> {
    const createdvampire = new this.vampireModel(createVampireDto);
    return await createdvampire.save();
  }

  async findAll(): Promise<Vampire[]> {
    return await this.vampireModel.find().exec();
  }
}