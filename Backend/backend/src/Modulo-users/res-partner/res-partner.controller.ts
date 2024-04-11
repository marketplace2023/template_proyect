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
import { ResPartnerService } from './res-partner.service';
import { CreateResPartnerDto } from './dto/create-res-partner.dto';
import { ResPartner } from './entities/res-partner.entity';
import { UpdatedResPartnerDto } from './dto/updated-res-partner.dto';

@Controller('res-partner')
export class ResPartnerController {
  constructor(private readonly resPartnerService: ResPartnerService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResPartner[]> {
    return await this.resPartnerService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaResPartnerDto: CreateResPartnerDto,
  ): Promise<ResPartner> {
    return await this.resPartnerService.create(createaResPartnerDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResPartner> {
    return await this.resPartnerService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedResPartnerDto: UpdatedResPartnerDto,
    @Param('id') id: string,
  ): Promise<ResPartner> {
    return await this.resPartnerService.updated(+id, updatedResPartnerDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resPartnerService.deleted(+id);
  }
}
