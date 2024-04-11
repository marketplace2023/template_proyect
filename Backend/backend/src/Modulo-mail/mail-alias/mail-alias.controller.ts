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
import { MailAlias } from './entities/mail-alias.entity';
import { MailAliasService } from './mail-alias.service';
import { CreateMailAliasDto } from './dto/create-mail-alias.dto';
import { UpdatedMailAliasDto } from './dto/updated-mail-alias.dto';
@Controller('mail-alias')
export class MailAliasController {
  constructor(private readonly mailAliasService: MailAliasService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailAlias[]> {
    return await this.mailAliasService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailAliasDto: CreateMailAliasDto,
  ): Promise<MailAlias> {
    return await this.mailAliasService.create(createaMailAliasDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailAlias> {
    return await this.mailAliasService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailAliasDto: UpdatedMailAliasDto,
    @Param('id') id: string,
  ): Promise<MailAlias> {
    return await this.mailAliasService.updated(+id, updatedMailAliasDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mailAliasService.deleted(+id);
  }
}
