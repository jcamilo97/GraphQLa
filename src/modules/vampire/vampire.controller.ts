import { Controller, Get, Post, Req, Res, Body, Next, HttpStatus} from '@nestjs/common';
import { VampireService } from './vampire.service';
import { Vampire } from './interfaces/vampire.interface';
import { CreateVampireDto } from './dto/create-vampire.dto';


@Controller()

export class VampireController {

 constructor(
  private readonly vampireservice:VampireService) {}
     
  @Post()
  async createVampire(@Req() req, @Res() res, @Body() body:CreateVampireDto) {
    res.status(HttpStatus.OK).send(await this.vampireservice.create(body))
  }

  @Get()
  async vampires(@Req() req, @Res() res, @Body() body):Promise<Vampire> {
   return res.status(HttpStatus.OK).send(await this.vampireservice.findAll())
  }
}