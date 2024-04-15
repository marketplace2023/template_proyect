import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailShortcodeService } from './mail_shortcode.service';
import { CreateMailShortcodeDto } from './dto/create-mail_shortcode.dto';
import { UpdateMailShortcodeDto } from './dto/update-mail_shortcode.dto';

@Controller('mail-shortcode')
export class MailShortcodeController {
  constructor(private readonly mailShortcodeService: MailShortcodeService) {}

  @Post()
  create(@Body() createMailShortcodeDto: CreateMailShortcodeDto) {
    return this.mailShortcodeService.create(createMailShortcodeDto);
  }

  @Get()
  findAll() {
    return this.mailShortcodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailShortcodeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailShortcodeDto: UpdateMailShortcodeDto,
  ) {
    return this.mailShortcodeService.update(+id, updateMailShortcodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailShortcodeService.remove(+id);
  }
}
//administracion-codigos-cortos                                                        # (mail.shortcode)
//# Gestiona códigos cortos para contenido dinámico en mensajes.
