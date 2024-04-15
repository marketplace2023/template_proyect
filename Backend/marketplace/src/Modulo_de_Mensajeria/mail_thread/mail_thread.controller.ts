import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailThreadService } from './mail_thread.service';
import { CreateMailThreadDto } from './dto/create-mail_thread.dto';
import { UpdateMailThreadDto } from './dto/update-mail_thread.dto';

@Controller('mail-thread')
export class MailThreadController {
  constructor(private readonly mailThreadService: MailThreadService) {}

  @Post()
  create(@Body() createMailThreadDto: CreateMailThreadDto) {
    return this.mailThreadService.create(createMailThreadDto);
  }

  @Get()
  findAll() {
    return this.mailThreadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailThreadService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailThreadDto: UpdateMailThreadDto,
  ) {
    return this.mailThreadService.update(+id, updateMailThreadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailThreadService.remove(+id);
  }
}
//seguimiento-discusiones                                                                 # (mail.thread)
//# Ofrece seguimiento y organización de conversaciones en registros específicos.
