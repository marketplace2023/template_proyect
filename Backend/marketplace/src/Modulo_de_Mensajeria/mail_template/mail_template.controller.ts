import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailTemplateService } from './mail_template.service';
import { CreateMailTemplateDto } from './dto/create-mail_template.dto';
import { UpdateMailTemplateDto } from './dto/update-mail_template.dto';

@Controller('mail-template')
export class MailTemplateController {
  constructor(private readonly mailTemplateService: MailTemplateService) {}

  @Post()
  create(@Body() createMailTemplateDto: CreateMailTemplateDto) {
    return this.mailTemplateService.create(createMailTemplateDto);
  }

  @Get()
  findAll() {
    return this.mailTemplateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailTemplateService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailTemplateDto: UpdateMailTemplateDto,
  ) {
    return this.mailTemplateService.update(+id, updateMailTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailTemplateService.remove(+id);
  }
}
//plantillas-mensajes                                                                  # (mail.template)
//# Administra plantillas para la creación rápida de mensajes estandarizados.
