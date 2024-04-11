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
import { MailMail } from './entities/mail-mail.entity';
import { UpdatedMailMailDto } from './dto/updated-mail-mail.dto';
import { CreateMailMailDto } from './dto/create-mail-mail.dto';
import { MailMailService } from './mail-mail.service';
@Controller('mail-mail')
export class MailMailController {
  constructor(private readonly MailMailService: MailMailService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailMail[]> {
    return await this.MailMailService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailMailDto: CreateMailMailDto,
  ): Promise<MailMail> {
    return await this.MailMailService.create(createaMailMailDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailMail> {
    return await this.MailMailService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailMailDto: UpdatedMailMailDto,
    @Param('id') id: string,
  ): Promise<MailMail> {
    return await this.MailMailService.updated(+id, updatedMailMailDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailMailService.deleted(+id);
  }
}
