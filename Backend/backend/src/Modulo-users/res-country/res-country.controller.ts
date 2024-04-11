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
import { ResCountryService } from './res-country.service';
import { ResCountry } from './entities/res-country.entity';
import { CreateResCountryDto } from './dto/created-res-country.dto';
import { UpdatedResCountryDto } from './dto/updated-res-country.dto';
@Controller('res-country')
export class ResCountryController {
  constructor(private readonly resCountryService: ResCountryService) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResCountry[]> {
    return await this.resCountryService.paginate(+page, +perPage);
  }
  //Post
  @Post()
  async create(
    @Body()
    createaResCountryDto: CreateResCountryDto,
  ): Promise<ResCountry> {
    return await this.resCountryService.create(createaResCountryDto);
  }
  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResCountry> {
    return await this.resCountryService.findOne(+id);
  }
  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedResCountryDto: UpdatedResCountryDto,
    @Param('id') id: string,
  ): Promise<ResCountry> {
    return await this.resCountryService.updated(+id, updatedResCountryDto);
  }
  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resCountryService.deleted(+id);
  }
}
