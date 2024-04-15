import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailMessageRelationService } from './mail_message_relation.service';
import { CreateMailMessageRelationDto } from './dto/create-mail_message_relation.dto';
import { UpdateMailMessageRelationDto } from './dto/update-mail_message_relation.dto';

@Controller('mail-message-relation')
export class MailMessageRelationController {
  constructor(
    private readonly mailMessageRelationService: MailMessageRelationService,
  ) {}

  @Post()
  create(@Body() createMailMessageRelationDto: CreateMailMessageRelationDto) {
    return this.mailMessageRelationService.create(createMailMessageRelationDto);
  }

  @Get()
  findAll() {
    return this.mailMessageRelationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailMessageRelationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailMessageRelationDto: UpdateMailMessageRelationDto,
  ) {
    return this.mailMessageRelationService.update(
      +id,
      updateMailMessageRelationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailMessageRelationService.remove(+id);
  }
}
//relacion-mensajes-registros                                                      # (mail.message.relation)
//# Vincula mensajes con registros específicos para mejor trazabilidad.
