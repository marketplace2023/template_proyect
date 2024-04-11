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
import { MailGuest } from './entities/mail-guest.entity';
import { UpdatedMailGuestDto } from './dto/updated-mail-guest.dto';
import { CreateMailGuestDto } from './dto/create-mail-guest.dto';
import { MailGuestService } from './mail-guest.service';
@Controller('mail-guest')
export class MailGuestController {
  constructor(private readonly MailGuestService: MailGuestService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailGuest[]> {
    return await this.MailGuestService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailGuestDto: CreateMailGuestDto,
  ): Promise<MailGuest> {
    return await this.MailGuestService.create(createaMailGuestDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailGuest> {
    return await this.MailGuestService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailGuestDto: UpdatedMailGuestDto,
    @Param('id') id: string,
  ): Promise<MailGuest> {
    return await this.MailGuestService.updated(+id, updatedMailGuestDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailGuestService.deleted(+id);
  }
}
