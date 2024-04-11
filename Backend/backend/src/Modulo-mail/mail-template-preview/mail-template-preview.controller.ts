import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MailTemplatePreviewService } from './mail-template-preview.service';
import { MailTemplatePreview } from './entities/mail-template-preview-entity';
import { CreateMailTemplatePreviewDto } from './dto/create-mail-template-preview.dto';
import { UpdatedMailTemplatePreviewDto } from './dto/updated-mail-template-preview.dto';
@Controller('mail-template-preview')
export class MailTemplatePreviewController {
  constructor(
    private readonly MailTemplatePreviewService: MailTemplatePreviewService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailTemplatePreview[]> {
    return await this.MailTemplatePreviewService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailTemplatePreviewDto: CreateMailTemplatePreviewDto,
  ): Promise<MailTemplatePreview> {
    return await this.MailTemplatePreviewService.create(
      createaMailTemplatePreviewDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailTemplatePreview> {
    return await this.MailTemplatePreviewService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailTemplatePreviewDto: UpdatedMailTemplatePreviewDto,
    @Param('id') id: string,
  ): Promise<MailTemplatePreview> {
    return await this.MailTemplatePreviewService.updated(
      +id,
      updatedMailTemplatePreviewDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailTemplatePreviewService.deleted(+id);
  }
}
