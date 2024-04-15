import { PartialType } from '@nestjs/mapped-types';
import { CreateMailThreadDto } from './create-mail_thread.dto';

export class UpdateMailThreadDto extends PartialType(CreateMailThreadDto) {}
