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
import { MailTrackingValue } from './entities/mail-tracking-value.entity';
import { UpdatedMailTrackingValueDto } from './dto/updated-mail-tracking-value.dto';
import { CreateMailTrackingValueDto } from './dto/create-mail-tracking-value.dto';
import { MailTrackingValueService } from './mail-tracking-value.service';
@Controller('mail-tracking-value')
export class MailTrackingValueController {
  constructor(
    private readonly MailTrackingValueService: MailTrackingValueService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailTrackingValue[]> {
    return await this.MailTrackingValueService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailTrackingValueDto: CreateMailTrackingValueDto,
  ): Promise<MailTrackingValue> {
    return await this.MailTrackingValueService.create(
      createaMailTrackingValueDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailTrackingValue> {
    return await this.MailTrackingValueService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailTrackingValueDto: UpdatedMailTrackingValueDto,
    @Param('id') id: string,
  ): Promise<MailTrackingValue> {
    return await this.MailTrackingValueService.updated(
      +id,
      updatedMailTrackingValueDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailTrackingValueService.deleted(+id);
  }
}
