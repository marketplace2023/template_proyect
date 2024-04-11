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
import { ResPartnerCategory } from './entities/res-partner-category.entity';
import { ResPartnerCategoryService } from './res-partner-category.service';
import { CreateResPartnerCategoryDto } from './dto/create-res-partner-category.dto';
import { UpdatedProductsCategoryDto } from 'src/Modulo-products/products-category/dto/updated-products-category.dto';
@Controller('res-partner-category')
export class ResPartnerCategoryController {
  constructor(
    private readonly resPartnerCategoryService: ResPartnerCategoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResPartnerCategory[]> {
    return await this.resPartnerCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaResPartnerCategoryDto: CreateResPartnerCategoryDto,
  ): Promise<ResPartnerCategory> {
    return await this.resPartnerCategoryService.create(
      createaResPartnerCategoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResPartnerCategory> {
    return await this.resPartnerCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedResPartnerCategoryDto: UpdatedProductsCategoryDto,
    @Param('id') id: string,
  ): Promise<ResPartnerCategory> {
    return await this.resPartnerCategoryService.updated(
      +id,
      updatedResPartnerCategoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resPartnerCategoryService.deleted(+id);
  }
}
