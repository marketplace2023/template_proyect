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
import { MailMessageSubtype } from './entities/mail-message-subtype.entity';
import { UpdatedMailMessageSubtypeDto } from './dto/updated-mail-message-subtype.dto';
import { CreateMailMessageSubtypeDto } from './dto/create-mail-message-subtype.dto';
import { MailMessageSubtypeService } from './mail-message-subtype.service';
@Controller('mail-message-subtype')
export class MailMessageSubtypeController {
  constructor(
    private readonly MailMessageSubtypeService: MailMessageSubtypeService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailMessageSubtype[]> {
    return await this.MailMessageSubtypeService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailMessageSubtypeDto: CreateMailMessageSubtypeDto,
  ): Promise<MailMessageSubtype> {
    return await this.MailMessageSubtypeService.create(
      createaMailMessageSubtypeDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailMessageSubtype> {
    return await this.MailMessageSubtypeService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailMessageSubtypeDto: UpdatedMailMessageSubtypeDto,
    @Param('id') id: string,
  ): Promise<MailMessageSubtype> {
    return await this.MailMessageSubtypeService.updated(
      +id,
      updatedMailMessageSubtypeDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailMessageSubtypeService.deleted(+id);
  }
}
