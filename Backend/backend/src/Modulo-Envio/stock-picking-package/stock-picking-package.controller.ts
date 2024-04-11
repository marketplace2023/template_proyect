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
import { StockPickingPackage } from './entities/stock-picking-package.entity';
import { UpdatedStockPickingPackageDto } from './dto/updated-stock-picking-package.dto';
import { CreateStockPickingPackageDto } from './dto/created-stock-picking-package.dto';
import { StockPickingPackageService } from './stock-picking-package.service';
@Controller('stock-picking-package')
export class StockPickingPackageController {
  constructor(
    private readonly stockPickingPackageService: StockPickingPackageService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<StockPickingPackage[]> {
    return await this.stockPickingPackageService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaStockPickingPackageDto: CreateStockPickingPackageDto,
  ): Promise<StockPickingPackage> {
    return await this.stockPickingPackageService.create(
      createaStockPickingPackageDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StockPickingPackage> {
    return await this.stockPickingPackageService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedStockPickingPackageDto: UpdatedStockPickingPackageDto,
    @Param('id') id: string,
  ): Promise<StockPickingPackage> {
    return await this.stockPickingPackageService.updated(
      +id,
      updatedStockPickingPackageDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stockPickingPackageService.deleted(+id);
  }
}
