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
import { MailChannelRtcSessionService } from './mail-channel-rtc-session.service';
import { MailChannelRtcSession } from './entities/mail-channel-rtc-session.entity';
import { CreateMailChannelRtcSessionDto } from './dto/create-mail-channel-rtc-session.dto';
import { UpdatedMailChannelRtcSessionDto } from './dto/updated-mail-channel-rtc-session.dto';
@Controller('mail-channel-rtc-session')
export class MailChannelRtcSessionController {
  constructor(
    private readonly mailChannelRtcSessionService: MailChannelRtcSessionService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailChannelRtcSession[]> {
    return await this.mailChannelRtcSessionService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailChannelRtcSessionDto: CreateMailChannelRtcSessionDto,
  ): Promise<MailChannelRtcSession> {
    return await this.mailChannelRtcSessionService.create(
      createaMailChannelRtcSessionDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailChannelRtcSession> {
    return await this.mailChannelRtcSessionService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailChannelRtcSessionDto: UpdatedMailChannelRtcSessionDto,
    @Param('id') id: string,
  ): Promise<MailChannelRtcSession> {
    return await this.mailChannelRtcSessionService.updated(
      +id,
      updatedMailChannelRtcSessionDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mailChannelRtcSessionService.deleted(+id);
  }
}
