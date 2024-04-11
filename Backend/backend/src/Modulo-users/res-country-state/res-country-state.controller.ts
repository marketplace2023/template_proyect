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
import { ResCountryStateService } from './res-country-state.service';
import { ResCountryState } from './entities/res-country-state.entity';
import { CreateResCountryStateDto } from './dto/created-res-country-state.dto';
import { UpdatedResCountryStateDto } from './dto/updated-res-country-state.dto';
@Controller('res-country-state')
export class ResCountryStateController {
  constructor(
    private readonly resCountryStateService: ResCountryStateService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResCountryState[]> {
    return await this.resCountryStateService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaResCountryStateDto: CreateResCountryStateDto,
  ): Promise<ResCountryState> {
    return await this.resCountryStateService.create(createaResCountryStateDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResCountryState> {
    return await this.resCountryStateService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedResCountryStateDto: UpdatedResCountryStateDto,
    @Param('id') id: string,
  ): Promise<ResCountryState> {
    return await this.resCountryStateService.updated(
      +id,
      updatedResCountryStateDto,
    );
  }

  //Deleteddd
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resCountryStateService.deleted(+id);
  }
}
