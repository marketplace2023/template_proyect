import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailTemplatePreviewService } from './mail_template_preview.service';
import { CreateMailTemplatePreviewDto } from './dto/create-mail_template_preview.dto';
import { UpdateMailTemplatePreviewDto } from './dto/update-mail_template_preview.dto';

@Controller('mail-template-preview')
export class MailTemplatePreviewController {
  constructor(
    private readonly mailTemplatePreviewService: MailTemplatePreviewService,
  ) {}

  @Post()
  create(@Body() createMailTemplatePreviewDto: CreateMailTemplatePreviewDto) {
    return this.mailTemplatePreviewService.create(createMailTemplatePreviewDto);
  }

  @Get()
  findAll() {
    return this.mailTemplatePreviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailTemplatePreviewService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailTemplatePreviewDto: UpdateMailTemplatePreviewDto,
  ) {
    return this.mailTemplatePreviewService.update(
      +id,
      updateMailTemplatePreviewDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailTemplatePreviewService.remove(+id);
  }
}
//previsualizacion-plantillas                                                        # (mail.template.preview)
//# Almacena y muestra previsualizaciones de plantillas de mensajes.
