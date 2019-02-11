import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver, ResolveProperty, Parent } from '@nestjs/graphql';
import { VampireService } from './vampire.service';
import { Vampire } from '../../graphql.schema'
// import { Vampire } from './interfaces/vampire.interface';
import { CreateVampireDto } from './dto/create-vampire.dto';

@Resolver('Vampire')
export class vampiresResolver {
  constructor(
    private readonly vampireservice: VampireService
  ) {}
    
  @Query('vampire')
  async findOneVampire(@Args('name') name: String) {
    const res = await this.vampireservice.findOneById(name);
    console.log('resolver', res)
    return res;
  }

//   @ResolveProperty()
//   async posts(@Parent() author) {
//     const { id } = author;
//     return await this.vampireservice.findAll({ authorId: id });
//   }
}