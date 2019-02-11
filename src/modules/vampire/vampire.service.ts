import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vampire } from './interfaces/vampire.interface';
import { CreateVampireDto } from './dto/create-vampire.dto';


@Injectable()
export class VampireService {
  constructor(@Inject('VampireModelToken') private readonly vampireModel: Model<Vampire>) {}

  async create(createVampireDto: CreateVampireDto): Promise<Vampire> {
    const createdvampire = new this.vampireModel(createVampireDto);
    return await createdvampire.save();
  }

  async findOneById(id: String): Promise<Vampire> {
    console.log('id',id)
    const result =  await this.vampireModel.find({ name: id}).exec()
    console.log(result)
    return result[0]
  }

  async findAll(): Promise<Vampire[]> {
    return await this.vampireModel.find().exec();
  }
}