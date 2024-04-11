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
import { MailShortcode } from './entities/mail-shortcode.entity';
import { UpdatedMailShortcodeDto } from './dto/updated-mail-shortcode.dto';
import { CreateMailShortcodeDto } from './dto/create-mail-shortcode.dto';
import { MailShortcodeService } from './mail-shortcode.service';
@Controller('mail-shortcode')
export class MailShortcodeController {
  constructor(private readonly MailShortcodeService: MailShortcodeService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailShortcode[]> {
    return await this.MailShortcodeService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailShortcodeDto: CreateMailShortcodeDto,
  ): Promise<MailShortcode> {
    return await this.MailShortcodeService.create(createaMailShortcodeDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailShortcode> {
    return await this.MailShortcodeService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailShortcodeDto: UpdatedMailShortcodeDto,
    @Param('id') id: string,
  ): Promise<MailShortcode> {
    return await this.MailShortcodeService.updated(
      +id,
      updatedMailShortcodeDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailShortcodeService.deleted(+id);
  }
}
