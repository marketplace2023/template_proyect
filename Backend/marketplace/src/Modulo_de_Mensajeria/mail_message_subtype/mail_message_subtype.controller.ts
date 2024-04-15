import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailMessageSubtypeService } from './mail_message_subtype.service';
import { CreateMailMessageSubtypeDto } from './dto/create-mail_message_subtype.dto';
import { UpdateMailMessageSubtypeDto } from './dto/update-mail_message_subtype.dto';

@Controller('mail-message-subtype')
export class MailMessageSubtypeController {
  constructor(
    private readonly mailMessageSubtypeService: MailMessageSubtypeService,
  ) {}

  @Post()
  create(@Body() createMailMessageSubtypeDto: CreateMailMessageSubtypeDto) {
    return this.mailMessageSubtypeService.create(createMailMessageSubtypeDto);
  }

  @Get()
  findAll() {
    return this.mailMessageSubtypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailMessageSubtypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailMessageSubtypeDto: UpdateMailMessageSubtypeDto,
  ) {
    return this.mailMessageSubtypeService.update(
      +id,
      updateMailMessageSubtypeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailMessageSubtypeService.remove(+id);
  }
}
//definicion-subtipos-mensajes                                                        # (mail.message.subtype)
//# Establece categorías para organizar los mensajes en el sistema.
