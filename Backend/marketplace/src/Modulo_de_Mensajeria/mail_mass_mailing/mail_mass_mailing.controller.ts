import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailMassMailingService } from './mail_mass_mailing.service';
import { CreateMailMassMailingDto } from './dto/create-mail_mass_mailing.dto';
import { UpdateMailMassMailingDto } from './dto/update-mail_mass_mailing.dto';

@Controller('mail-mass-mailing')
export class MailMassMailingController {
  constructor(
    private readonly mailMassMailingService: MailMassMailingService,
  ) {}

  @Post()
  create(@Body() createMailMassMailingDto: CreateMailMassMailingDto) {
    return this.mailMassMailingService.create(createMailMassMailingDto);
  }

  @Get()
  findAll() {
    return this.mailMassMailingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailMassMailingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailMassMailingDto: UpdateMailMassMailingDto,
  ) {
    return this.mailMassMailingService.update(+id, updateMailMassMailingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailMassMailingService.remove(+id);
  }
}
//envios-masivos                                                                     # (mail.mass_mailing)
//# Herramientas para campañas de correo electrónico a gran escala.
