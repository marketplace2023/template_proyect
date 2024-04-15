import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailMassMailingContactsService } from './mail_mass_mailing_contacts.service';
import { CreateMailMassMailingContactDto } from './dto/create-mail_mass_mailing_contact.dto';
import { UpdateMailMassMailingContactDto } from './dto/update-mail_mass_mailing_contact.dto';

@Controller('mail-mass-mailing-contacts')
export class MailMassMailingContactsController {
  constructor(
    private readonly mailMassMailingContactsService: MailMassMailingContactsService,
  ) {}

  @Post()
  create(
    @Body() createMailMassMailingContactDto: CreateMailMassMailingContactDto,
  ) {
    return this.mailMassMailingContactsService.create(
      createMailMassMailingContactDto,
    );
  }

  @Get()
  findAll() {
    return this.mailMassMailingContactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailMassMailingContactsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailMassMailingContactDto: UpdateMailMassMailingContactDto,
  ) {
    return this.mailMassMailingContactsService.update(
      +id,
      updateMailMassMailingContactDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailMassMailingContactsService.remove(+id);
  }
}
//gestion-contactos-campañas                                                    # (mail.mass_mailing.contact)
//# Administra contactos involucrados en campañas de marketing por correo.
