import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailChannelService } from './mail_channel.service';
import { CreateMailChannelDto } from './dto/create-mail_channel.dto';
import { UpdateMailChannelDto } from './dto/update-mail_channel.dto';

@Controller('mail-channel')
export class MailChannelController {
  constructor(private readonly mailChannelService: MailChannelService) {}

  @Post()
  create(@Body() createMailChannelDto: CreateMailChannelDto) {
    return this.mailChannelService.create(createMailChannelDto);
  }

  @Get()
  findAll() {
    return this.mailChannelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailChannelService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailChannelDto: UpdateMailChannelDto,
  ) {
    return this.mailChannelService.update(+id, updateMailChannelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailChannelService.remove(+id);
  }
}
//gestion-canales-comunicacion                                                            # (mail.channel)
//# Administra canales de comunicación para discusiones grupales.
