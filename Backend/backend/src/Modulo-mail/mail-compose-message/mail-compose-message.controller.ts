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
import { UpdatedMailComposeMessageDto } from './dto/updated-mail-compose-message.dto';
import { CreateMailComposeMessageDto } from './dto/create-mail-compose-message.dto';
import { MailComposeMessage } from './entities/mail-compose-message.entity';
import { MailComposeMessageService } from './mail-compose-message.service';
@Controller('mail-compose-message')
export class MailComposeMessageController {
  constructor(
    private readonly mailComposeMessageService: MailComposeMessageService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailComposeMessage[]> {
    return await this.mailComposeMessageService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailComposeMessageDto: CreateMailComposeMessageDto,
  ): Promise<MailComposeMessage> {
    return await this.mailComposeMessageService.create(
      createaMailComposeMessageDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailComposeMessage> {
    return await this.mailComposeMessageService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailComposeMessageDto: UpdatedMailComposeMessageDto,
    @Param('id') id: string,
  ): Promise<MailComposeMessage> {
    return await this.mailComposeMessageService.updated(
      +id,
      updatedMailComposeMessageDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mailComposeMessageService.deleted(+id);
  }
}
