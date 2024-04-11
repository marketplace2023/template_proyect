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
import { MailChannelMemberService } from './mail-channel-member.service';
import { MailChannelMember } from './entities/mail-channel-member-not-found.exception';
import { CreateMailChannelMemberDto } from './dto/create-mail-channel-member.dto';
import { UpdatedMailChannelMemberDto } from './dto/updated-mail-channel-member.dto';
@Controller('mail-channel-member')
export class MailChannelMemberController {
  constructor(
    private readonly mailChannelMemberService: MailChannelMemberService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailChannelMember[]> {
    return await this.mailChannelMemberService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailChannelMemberDto: CreateMailChannelMemberDto,
  ): Promise<MailChannelMember> {
    return await this.mailChannelMemberService.create(
      createaMailChannelMemberDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailChannelMember> {
    return await this.mailChannelMemberService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailChannelMemberDto: UpdatedMailChannelMemberDto,
    @Param('id') id: string,
  ): Promise<MailChannelMember> {
    return await this.mailChannelMemberService.updated(
      +id,
      updatedMailChannelMemberDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mailChannelMemberService.deleted(+id);
  }
}
