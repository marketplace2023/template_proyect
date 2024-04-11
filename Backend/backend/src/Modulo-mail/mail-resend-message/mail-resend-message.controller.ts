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
import { MailResendMessageService } from './mail-resend-message.service';
import { MailResendMessage } from './entities/mail-resend-message.entity';
import { CreateMailResendMessageDto } from './dto/create-mail-resend-message.dto';
import { UpdatedMailResendMessageDto } from './dto/updated-mail-resend-message.dto';

@Controller('mail-resend-message')
export class MailResendMessageController {
  constructor(
    private readonly MailResendMessageService: MailResendMessageService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailResendMessage[]> {
    return await this.MailResendMessageService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailResendMessageDto: CreateMailResendMessageDto,
  ): Promise<MailResendMessage> {
    return await this.MailResendMessageService.create(
      createaMailResendMessageDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailResendMessage> {
    return await this.MailResendMessageService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailResendMessageDto: UpdatedMailResendMessageDto,
    @Param('id') id: string,
  ): Promise<MailResendMessage> {
    return await this.MailResendMessageService.updated(
      +id,
      updatedMailResendMessageDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailResendMessageService.deleted(+id);
  }
}
