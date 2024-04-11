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
import { MailActivityType } from './entities/mail-activity.entity';
import { UpdatedMailActivityTypeDto } from './dto/updated-mail-activity-type.dto';
import { CreateMailActivityTypeDto } from './dto/create-mail-activity-type.dto';
import { MailActivityTypeService } from './mail-activity-type.service';
@Controller('mail-activity-type')
export class MailActivityTypeController {
  constructor(
    private readonly mailActivityTypeService: MailActivityTypeService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailActivityType[]> {
    return await this.mailActivityTypeService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailActivityTypeDto: CreateMailActivityTypeDto,
  ): Promise<MailActivityType> {
    return await this.mailActivityTypeService.create(
      createaMailActivityTypeDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailActivityType> {
    return await this.mailActivityTypeService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailActivityTypeDto: UpdatedMailActivityTypeDto,
    @Param('id') id: string,
  ): Promise<MailActivityType> {
    return await this.mailActivityTypeService.updated(
      +id,
      updatedMailActivityTypeDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mailActivityTypeService.deleted(+id);
  }
}
