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
import { MailBlacklist } from './entities/mail-blacklist.entity';
import { CreateMailBlacklistDto } from './dto/create-mail-blacklist.dto';
import { MailBlacklistService } from './mail-blacklist.service';
import { UpdatedMailBlacklistDto } from './dto/updated-mail-blacklist.dto';
@Controller('mail-blacklist')
export class MailBlacklistController {
  constructor(private readonly mailBlacklistService: MailBlacklistService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailBlacklist[]> {
    return await this.mailBlacklistService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailBlacklistDto: CreateMailBlacklistDto,
  ): Promise<MailBlacklist> {
    return await this.mailBlacklistService.create(createaMailBlacklistDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailBlacklist> {
    return await this.mailBlacklistService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailBlacklistDto: UpdatedMailBlacklistDto,
    @Param('id') id: string,
  ): Promise<MailBlacklist> {
    return await this.mailBlacklistService.updated(
      +id,
      updatedMailBlacklistDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mailBlacklistService.deleted(+id);
  }
}
