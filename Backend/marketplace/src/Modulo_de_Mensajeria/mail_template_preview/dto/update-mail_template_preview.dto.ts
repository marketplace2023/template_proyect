import { PartialType } from '@nestjs/mapped-types';
import { CreateMailTemplatePreviewDto } from './create-mail_template_preview.dto';

export class UpdateMailTemplatePreviewDto extends PartialType(CreateMailTemplatePreviewDto) {}
