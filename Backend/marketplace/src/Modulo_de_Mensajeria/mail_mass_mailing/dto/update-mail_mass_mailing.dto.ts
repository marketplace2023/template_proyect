import { PartialType } from '@nestjs/mapped-types';
import { CreateMailMassMailingDto } from './create-mail_mass_mailing.dto';

export class UpdateMailMassMailingDto extends PartialType(CreateMailMassMailingDto) {}
