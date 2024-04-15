import { PartialType } from '@nestjs/mapped-types';
import { CreateMailAliasDto } from './create-mail_alias.dto';

export class UpdateMailAliasDto extends PartialType(CreateMailAliasDto) {}
