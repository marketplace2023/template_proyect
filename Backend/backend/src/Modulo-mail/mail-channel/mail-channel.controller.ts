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
import { MailChannel } from './entities/mail-channel.entity';
import { MailChannelService } from './mail-channel.service';
import { CreateMailChannelDto } from './dto/create-mail-channel.dto';
import { UpdatedMailChannelDto } from './dto/updated-mail-channel-dto';
@Controller('mail-channel')
export class MailChannelController {
  constructor(private readonly mailChannelService: MailChannelService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailChannel[]> {
    return await this.mailChannelService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailChannelDto: CreateMailChannelDto,
  ): Promise<MailChannel> {
    return await this.mailChannelService.create(createaMailChannelDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailChannel> {
    return await this.mailChannelService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailChannelDto: UpdatedMailChannelDto,
    @Param('id') id: string,
  ): Promise<MailChannel> {
    return await this.mailChannelService.updated(+id, updatedMailChannelDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mailChannelService.deleted(+id);
  }
}
