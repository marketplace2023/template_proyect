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
import { IrModuleCategory } from '../ir-module-category/entities/ir-module-category.entity';
import { CreatedIrModuleCategoryDto } from '../ir-module-category/dto/created-ir-module-category.dto';
import { UpdatedIrModuleCategoryDto } from '../ir-module-category/dto/updated-ir-module-category.dto';
import { IrModuleCategoryService } from './ir-module-category.service';
@Controller('ir-module-category')
export class IrModuleCategoryController {
  constructor(
    private readonly irModuleCategoryService: IrModuleCategoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<IrModuleCategory[]> {
    return await this.irModuleCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createadIrModuleCategoryDto: CreatedIrModuleCategoryDto,
  ): Promise<IrModuleCategory> {
    return await this.irModuleCategoryService.create(
      createadIrModuleCategoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IrModuleCategory> {
    return await this.irModuleCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedIrModuleCategoryDto: UpdatedIrModuleCategoryDto,
    @Param('id') id: string,
  ): Promise<IrModuleCategory> {
    return await this.irModuleCategoryService.updated(
      +id,
      updatedIrModuleCategoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.irModuleCategoryService.deleted(+id);
  }
}
