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
import { MailBlacklistRemove } from './entities/mail-blacklist-remove-not-found.exception';
import { UpdatedMailBlacklistRemoveDto } from './dto/updated-mail-blacklist-remove.dto';
import { CreateMailBlacklistRemoveDto } from './dto/create-mail-blacklist-remove.dto';
import { MailBlacklistRemoveRemoveService } from './mail-blacklist-remove.service';
@Controller('mail-blacklist-remove')
export class MailBlacklistRemoveRemoveController {
  constructor(
    private readonly mailBlacklistRemoveService: MailBlacklistRemoveRemoveService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailBlacklistRemove[]> {
    return await this.mailBlacklistRemoveService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailBlacklistRemoveDto: CreateMailBlacklistRemoveDto,
  ): Promise<MailBlacklistRemove> {
    return await this.mailBlacklistRemoveService.create(
      createaMailBlacklistRemoveDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailBlacklistRemove> {
    return await this.mailBlacklistRemoveService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailBlacklistRemoveDto: UpdatedMailBlacklistRemoveDto,
    @Param('id') id: string,
  ): Promise<MailBlacklistRemove> {
    return await this.mailBlacklistRemoveService.updated(
      +id,
      updatedMailBlacklistRemoveDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mailBlacklistRemoveService.deleted(+id);
  }
}
