import { PartialType } from '@nestjs/mapped-types';
import { CreateMailMassMailingContactDto } from './create-mail_mass_mailing_contact.dto';

export class UpdateMailMassMailingContactDto extends PartialType(CreateMailMassMailingContactDto) {}
