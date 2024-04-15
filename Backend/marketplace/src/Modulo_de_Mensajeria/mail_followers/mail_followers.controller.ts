import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailFollowersService } from './mail_followers.service';
import { CreateMailFollowerDto } from './dto/create-mail_follower.dto';
import { UpdateMailFollowerDto } from './dto/update-mail_follower.dto';

@Controller('mail-followers')
export class MailFollowersController {
  constructor(private readonly mailFollowersService: MailFollowersService) {}

  @Post()
  create(@Body() createMailFollowerDto: CreateMailFollowerDto) {
    return this.mailFollowersService.create(createMailFollowerDto);
  }

  @Get()
  findAll() {
    return this.mailFollowersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailFollowersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailFollowerDto: UpdateMailFollowerDto,
  ) {
    return this.mailFollowersService.update(+id, updateMailFollowerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailFollowersService.remove(+id);
  }
}
//administracion-seguidores                                                             # (mail.followers)
//# Controla la lista de seguidores de registros y mensajes para notificaciones.
