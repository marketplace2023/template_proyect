import { PartialType } from '@nestjs/mapped-types';
import { CreateMailShortcodeDto } from './create-mail_shortcode.dto';

export class UpdateMailShortcodeDto extends PartialType(CreateMailShortcodeDto) {}
