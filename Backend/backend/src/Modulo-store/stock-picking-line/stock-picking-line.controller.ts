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
import { StockPickingLineService } from './stock-picking-line.service';
import { StockPickingLine } from './entities/stock-picking-line.entity';
import { CreateStockPickingLineDto } from './dto/created-stock-picking-line.dto';
import { UpdatedStockPickingLineDto } from './dto/updated-stock-picking-line.dto';
@Controller('stock-picking-line')
export class StockPickingLineController {
  constructor(
    private readonly stockPickingLineService: StockPickingLineService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockPickingLine[]> {
    return await this.stockPickingLineService.paginate(+page, +perPage);
  }
  //Post
  @Post()
  async create(
    @Body()
    createaStockPickingLineDto: CreateStockPickingLineDto,
  ): Promise<StockPickingLine> {
    return await this.stockPickingLineService.create(
      createaStockPickingLineDto,
    );
  }
  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockPickingLine> {
    return await this.stockPickingLineService.findOne(+id);
  }
  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedStockPickingLineDto: UpdatedStockPickingLineDto,
    @Param('id') id: string,
  ): Promise<StockPickingLine> {
    return await this.stockPickingLineService.updated(
      +id,
      updatedStockPickingLineDto,
    );
  }
  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockPickingLineService.deleted(+id);
  }
}
