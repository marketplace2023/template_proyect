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
import { MailMessage } from './entities/mail-message.entity';
import { MailMessageService } from './mail-message.service';
import { CreateMailMessageDto } from './dto/create-mail-message.dto';
import { UpdatedMailMessageDto } from './dto/updated-mail-message.dto';
@Controller('mail-message')
export class MailMessageController {
  constructor(private readonly MailMessageService: MailMessageService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailMessage[]> {
    return await this.MailMessageService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailMessageDto: CreateMailMessageDto,
  ): Promise<MailMessage> {
    return await this.MailMessageService.create(createaMailMessageDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailMessage> {
    return await this.MailMessageService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailMessageDto: UpdatedMailMessageDto,
    @Param('id') id: string,
  ): Promise<MailMessage> {
    return await this.MailMessageService.updated(+id, updatedMailMessageDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailMessageService.deleted(+id);
  }
}
