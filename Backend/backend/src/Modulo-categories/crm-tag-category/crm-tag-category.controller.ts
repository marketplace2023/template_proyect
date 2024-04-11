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
import { CrmTagCategoryService } from './crm-tag-category.service';
import { CrmTagCategory } from './entities/crm-tag-category.entity';
import { CreatedCrmTagCategoryDto } from './dto/created-crm-tag-category.dto';
import { UpdatedCrmTagCategoryDto } from './dto/updated-crm-tag-category.dto';
@Controller('crm-tag-category')
export class CrmTagCategoryController {
  constructor(private readonly crmTagCategoryService: CrmTagCategoryService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<CrmTagCategory[]> {
    return await this.crmTagCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createadCrmTagCategoryDto: CreatedCrmTagCategoryDto,
  ): Promise<CrmTagCategory> {
    return await this.crmTagCategoryService.create(createadCrmTagCategoryDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CrmTagCategory> {
    return await this.crmTagCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedCrmTagCategoryDto: UpdatedCrmTagCategoryDto,
    @Param('id') id: string,
  ): Promise<CrmTagCategory> {
    return await this.crmTagCategoryService.updated(
      +id,
      updatedCrmTagCategoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.crmTagCategoryService.deleted(+id);
  }
}
