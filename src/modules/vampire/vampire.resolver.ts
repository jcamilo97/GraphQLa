import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver, ResolveProperty, Mutation } from '@nestjs/graphql';
import { VampireService } from './vampire.service';
// import { Vampire } from '../../graphql.schema'
import { Vampire } from './interfaces/vampire.interface';
import { CreateVampireDto } from './dto/create-vampire.dto';

@Resolver('Vampire')
export class vampiresResolver {
  constructor(
    private readonly vampireservice: VampireService
  ) {}
    
  @Query()
  async getVampires() {
    return await this.vampireservice.findAll();
  }

  @Query('vampire')
  async findOneVampire(@Args('name') name: String) {
    const res = await this.vampireservice.findOneById(name);
    console.log('resolver', res)
    return res;
  }

  @Mutation('createVampire')
  async create(@Args('vampireObj') args: CreateVampireDto): Promise<Vampire> {
    console.log('vampire', args)
    const createdVampire = await this.vampireservice.create(args);
    // pubSub.publish('catCreated', { catCreated: createdVampire });
    return createdVampire;
  }
//   @ResolveProperty()
//   async posts(@Parent() author) {
//     const { id } = author;
//     return await this.vampireservice.findAll({ authorId: id });
//   }
}