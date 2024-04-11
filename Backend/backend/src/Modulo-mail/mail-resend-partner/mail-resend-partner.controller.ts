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
import { MailResendPartnerService } from './mail-resend-partner.service';
import { MailResendPartner } from './entities/mail-resend-partner.entity';
import { CreateMailResendPartnerDto } from './dto/create-mail-resend-partner.dto';
import { UpdatedMailResendPartnerDto } from './dto/updated-mail-resend-partner.dto';
@Controller('mail-resend-partner')
export class MailResendPartnerController {
  constructor(
    private readonly MailResendPartnerService: MailResendPartnerService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailResendPartner[]> {
    return await this.MailResendPartnerService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailResendPartnerDto: CreateMailResendPartnerDto,
  ): Promise<MailResendPartner> {
    return await this.MailResendPartnerService.create(
      createaMailResendPartnerDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailResendPartner> {
    return await this.MailResendPartnerService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailResendPartnerDto: UpdatedMailResendPartnerDto,
    @Param('id') id: string,
  ): Promise<MailResendPartner> {
    return await this.MailResendPartnerService.updated(
      +id,
      updatedMailResendPartnerDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailResendPartnerService.deleted(+id);
  }
}
