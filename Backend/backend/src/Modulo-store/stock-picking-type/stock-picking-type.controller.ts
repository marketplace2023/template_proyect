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
import { StockPickingType } from './entities/stock-picking-type.entity';
import { UpdatedStockPickingTypeDto } from './dto/updated-stock-picking-type.dto';
import { CreateStockPickingTypeDto } from './dto/created-stock-picking-type.dto';
import { StockPickingTypeService } from './stock-picking-type.service';
@Controller('stock-picking-type')
export class StockPickingTypeController {
  constructor(
    private readonly stockPickingTypeService: StockPickingTypeService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockPickingType[]> {
    return await this.stockPickingTypeService.paginate(+page, +perPage);
  }
  //Post
  @Post()
  async create(
    @Body()
    createaStockPickingTypeDto: CreateStockPickingTypeDto,
  ): Promise<StockPickingType> {
    return await this.stockPickingTypeService.create(
      createaStockPickingTypeDto,
    );
  }
  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockPickingType> {
    return await this.stockPickingTypeService.findOne(+id);
  }
  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedStockPickingTypeDto: UpdatedStockPickingTypeDto,
    @Param('id') id: string,
  ): Promise<StockPickingType> {
    return await this.stockPickingTypeService.updated(
      +id,
      updatedStockPickingTypeDto,
    );
  }
  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockPickingTypeService.deleted(+id);
  }
}
