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
import { StockPickingPackageLine } from './entities/stock-picking-package-line.entity';
import { UpdatedStockPickingPackageLineDto } from './dto/updated-stock-picking-package-line.dto';
import { CreateStockPickingPackageLineDto } from './dto/created-stock-picking-package-line.dto';
import { StockPickingPackageLineService } from './stock-picking-package-line.service';
@Controller('stock-picking-package-line')
export class StockPickingPackageLineController {
  constructor(
    private readonly stockPickingPackageLineService: StockPickingPackageLineService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockPickingPackageLine[]> {
    return await this.stockPickingPackageLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockPickingPackageLineDto: CreateStockPickingPackageLineDto,
  ): Promise<StockPickingPackageLine> {
    return await this.stockPickingPackageLineService.create(
      createaStockPickingPackageLineDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockPickingPackageLine> {
    return await this.stockPickingPackageLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedStockPickingPackageLineDto: UpdatedStockPickingPackageLineDto,
    @Param('id') id: string,
  ): Promise<StockPickingPackageLine> {
    return await this.stockPickingPackageLineService.updated(
      +id,
      updatedStockPickingPackageLineDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockPickingPackageLineService.deleted(+id);
  }
}
