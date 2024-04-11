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
import { HrEmployeeCategory } from './entities/hr-employee-category.entity';
import { HrEmployeeCategoryService } from './hr-employee-category.service';
import { CreateHrEmployeeCategoryDto } from './dto/create-hr-employee-category.dto';
import { UpdatedHrEmployeeCategoryDto } from './dto/updated-hr-employee-category.dto';
@Controller('hr-employee-category')
export class HrEmployeeCategoryController {
  constructor(
    private readonly hrEmployeeCategoryService: HrEmployeeCategoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<HrEmployeeCategory[]> {
    return await this.hrEmployeeCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaHrEmployeeCategoryDto: CreateHrEmployeeCategoryDto,
  ): Promise<HrEmployeeCategory> {
    return await this.hrEmployeeCategoryService.create(
      createaHrEmployeeCategoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<HrEmployeeCategory> {
    return await this.hrEmployeeCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedHrEmployeeCategoryDto: UpdatedHrEmployeeCategoryDto,
    @Param('id') id: string,
  ): Promise<HrEmployeeCategory> {
    return await this.hrEmployeeCategoryService.updated(
      +id,
      updatedHrEmployeeCategoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.hrEmployeeCategoryService.deleted(+id);
  }
}
