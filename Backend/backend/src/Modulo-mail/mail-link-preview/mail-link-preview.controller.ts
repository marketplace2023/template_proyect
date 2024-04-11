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
import { MailLinkPreview } from './entities/mail-link-preview.entity';
import { CreateMailLinkPreviewDto } from './dto/create-mail-link-preview.dto';
import { UpdatedMailLinkPreviewDto } from './dto/updated-mail-link-preview.dto';
import { MailLinkPreviewService } from './mail-link-preview.service';
@Controller('mail-link-preview')
export class MailLinkPreviewController {
  constructor(
    private readonly MailLinkPreviewService: MailLinkPreviewService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailLinkPreview[]> {
    return await this.MailLinkPreviewService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailLinkPreviewDto: CreateMailLinkPreviewDto,
  ): Promise<MailLinkPreview> {
    return await this.MailLinkPreviewService.create(createaMailLinkPreviewDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailLinkPreview> {
    return await this.MailLinkPreviewService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailLinkPreviewDto: UpdatedMailLinkPreviewDto,
    @Param('id') id: string,
  ): Promise<MailLinkPreview> {
    return await this.MailLinkPreviewService.updated(
      +id,
      updatedMailLinkPreviewDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailLinkPreviewService.deleted(+id);
  }
}
