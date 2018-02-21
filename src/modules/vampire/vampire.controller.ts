import { Controller, Get, Post, Req, Res, Body, Next, HttpStatus} from '@nestjs/common';
import { VampireService } from './vampire.service';


@Controller()

export class VampireController {

 constructor(
  private readonly vampireservice:VampireService) {}
     
  @Post()
  async createVampire(@Req() req, @Res() res, @Body() body) {
    res.status(HttpStatus.OK).send(await this.vampireservice.create(body))
  }

  @Get('/:id')
  async vampires(@Req() req, @Res() res, @Body() body) {
    res.status(HttpStatus.OK).send(await this.vampireservice.findAll())
  }
}