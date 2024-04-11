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
import { MailIceServerService } from './mail-ice-server.service';
import { MailIceServer } from './entities/mail-ice-server.entity';
import { CreateMailIceServerDto } from './dto/create-mail-ice-server.dto';
import { UpdatedMailIceServerDto } from './dto/updated-mail-ice-server.dto';
@Controller('mail-ice-server')
export class MailIceServerController {
  constructor(private readonly MailIceServerService: MailIceServerService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailIceServer[]> {
    return await this.MailIceServerService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailIceServerDto: CreateMailIceServerDto,
  ): Promise<MailIceServer> {
    return await this.MailIceServerService.create(createaMailIceServerDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailIceServer> {
    return await this.MailIceServerService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailIceServerDto: UpdatedMailIceServerDto,
    @Param('id') id: string,
  ): Promise<MailIceServer> {
    return await this.MailIceServerService.updated(
      +id,
      updatedMailIceServerDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailIceServerService.deleted(+id);
  }
}
