import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailAliasService } from './mail_alias.service';
import { CreateMailAliasDto } from './dto/create-mail_alias.dto';
import { UpdateMailAliasDto } from './dto/update-mail_alias.dto';

@Controller('mail-alias')
export class MailAliasController {
  constructor(private readonly mailAliasService: MailAliasService) {}

  @Post()
  create(@Body() createMailAliasDto: CreateMailAliasDto) {
    return this.mailAliasService.create(createMailAliasDto);
  }

  @Get()
  findAll() {
    return this.mailAliasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailAliasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailAliasDto: UpdateMailAliasDto,
  ) {
    return this.mailAliasService.update(+id, updateMailAliasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailAliasService.remove(+id);
  }
}
//configuracion-alias                                                                  # (mail.alias)
//# Gestiona los alias de correo electrónico para el envío de mensajes a registros.
