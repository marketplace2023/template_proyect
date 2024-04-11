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
import { StockMoveService } from './stock-move.service';
import { StockMove } from './entities/stock-move.entity';
import { UpdatedStockMoveDto } from './dto/updated-stock-move.dto';
import { CreateStockMoveDto } from './dto/created-stock-move.dto';
@Controller('stock-move')
export class StockMoveController {
  constructor(private readonly stockMoveService: StockMoveService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockMove[]> {
    return await this.stockMoveService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockMoveDto: CreateStockMoveDto,
  ): Promise<StockMove> {
    return await this.stockMoveService.create(createaStockMoveDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockMove> {
    return await this.stockMoveService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedStockMoveDto: UpdatedStockMoveDto,
    @Param('id') id: string,
  ): Promise<StockMove> {
    return await this.stockMoveService.updated(+id, updatedStockMoveDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockMoveService.deleted(+id);
  }
}
