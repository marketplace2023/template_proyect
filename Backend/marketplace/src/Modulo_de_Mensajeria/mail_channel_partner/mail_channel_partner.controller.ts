import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailChannelPartnerService } from './mail_channel_partner.service';
import { CreateMailChannelPartnerDto } from './dto/create-mail_channel_partner.dto';
import { UpdateMailChannelPartnerDto } from './dto/update-mail_channel_partner.dto';

@Controller('mail-channel-partner')
export class MailChannelPartnerController {
  constructor(
    private readonly mailChannelPartnerService: MailChannelPartnerService,
  ) {}

  @Post()
  create(@Body() createMailChannelPartnerDto: CreateMailChannelPartnerDto) {
    return this.mailChannelPartnerService.create(createMailChannelPartnerDto);
  }

  @Get()
  findAll() {
    return this.mailChannelPartnerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailChannelPartnerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailChannelPartnerDto: UpdateMailChannelPartnerDto,
  ) {
    return this.mailChannelPartnerService.update(
      +id,
      updateMailChannelPartnerDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailChannelPartnerService.remove(+id);
  }
}
//asociacion-canales-usuarios                                                         # (mail.channel.partner)
//# Relaciona usuarios con sus canales de comunicación participativos.
