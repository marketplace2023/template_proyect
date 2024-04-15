import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailComposeMessagesService } from './mail_compose_messages.service';
import { CreateMailComposeMessageDto } from './dto/create-mail_compose_message.dto';
import { UpdateMailComposeMessageDto } from './dto/update-mail_compose_message.dto';

@Controller('mail-compose-messages')
export class MailComposeMessagesController {
  constructor(
    private readonly mailComposeMessagesService: MailComposeMessagesService,
  ) {}

  @Post()
  create(@Body() createMailComposeMessageDto: CreateMailComposeMessageDto) {
    return this.mailComposeMessagesService.create(createMailComposeMessageDto);
  }

  @Get()
  findAll() {
    return this.mailComposeMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailComposeMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailComposeMessageDto: UpdateMailComposeMessageDto,
  ) {
    return this.mailComposeMessagesService.update(
      +id,
      updateMailComposeMessageDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailComposeMessagesService.remove(+id);
  }
}
//composicion-mensajes                                                            # (mail.compose.message)
//# Facilita la creación, respuesta y reenvío de mensajes.
