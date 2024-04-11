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
import { MailTemplateService } from './mail-template.service';
import { MailTemplate } from './entities/mail-template-preview-entity';
import { CreateMailTemplateDto } from './dto/create-mail-template.dto';
import { UpdatedMailTemplateDto } from './dto/updated-mail-template.dto';
@Controller('mail-template')
export class MailTemplateController {
  constructor(private readonly MailTemplateService: MailTemplateService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailTemplate[]> {
    return await this.MailTemplateService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailTemplateDto: CreateMailTemplateDto,
  ): Promise<MailTemplate> {
    return await this.MailTemplateService.create(createaMailTemplateDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailTemplate> {
    return await this.MailTemplateService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailTemplateDto: UpdatedMailTemplateDto,
    @Param('id') id: string,
  ): Promise<MailTemplate> {
    return await this.MailTemplateService.updated(+id, updatedMailTemplateDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailTemplateService.deleted(+id);
  }
}
