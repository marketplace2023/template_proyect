import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailMessageService } from './mail_message.service';
import { CreateMailMessageDto } from './dto/create-mail_message.dto';
import { UpdateMailMessageDto } from './dto/update-mail_message.dto';

@Controller('mail-message')
export class MailMessageController {
  constructor(private readonly mailMessageService: MailMessageService) {}

  @Post()
  create(@Body() createMailMessageDto: CreateMailMessageDto) {
    return this.mailMessageService.create(createMailMessageDto);
  }

  @Get()
  findAll() {
    return this.mailMessageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailMessageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailMessageDto: UpdateMailMessageDto,
  ) {
    return this.mailMessageService.update(+id, updateMailMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailMessageService.remove(+id);
  }
}
//gestor-mensajes                                                                         # (mail.message)
//# Maneja los detalles y contenidos de cada mensaje dentro del sistema.
