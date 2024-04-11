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
import { CreateResCompanyDto } from './dto/create-res-company.dto';
import { ResCompanyService } from './res-company.service';
import { ResCompany } from './entities/res-company.entity';
import { UpdatedResCompanyDto } from './dto/updated-res-company.dto';

@Controller('res-company')
export class ResCompanyController {
  constructor(private readonly resCompanyService: ResCompanyService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResCompany[]> {
    return await this.resCompanyService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaResCompanyDto: CreateResCompanyDto,
  ): Promise<ResCompany> {
    return await this.resCompanyService.create(createaResCompanyDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResCompany> {
    return await this.resCompanyService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedResCompanyDto: UpdatedResCompanyDto,
    @Param('id') id: string,
  ): Promise<ResCompany> {
    return await this.resCompanyService.updated(+id, updatedResCompanyDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resCompanyService.deleted(+id);
  }
}
