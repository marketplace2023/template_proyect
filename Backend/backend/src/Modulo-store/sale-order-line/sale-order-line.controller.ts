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
import { SaleOrderLineService } from './sale-order-line.service';
import { SaleOrderLine } from './entities/sale-order-line.entity';
import { CreateSaleOrderLineDto } from './dto/create-sale-order-line.dto';
import { UpdatedSaleOrderLineDto } from './dto/update-sale-order-line.dto';
@Controller('sale-order-line')
export class SaleOrderLineController {
  constructor(private readonly saleOrderLineService: SaleOrderLineService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleOrderLine[]> {
    return await this.saleOrderLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSaleOrderLineDto: CreateSaleOrderLineDto,
  ): Promise<SaleOrderLine> {
    return await this.saleOrderLineService.create(createaSaleOrderLineDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleOrderLine> {
    return await this.saleOrderLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSaleOrderLineDto: UpdatedSaleOrderLineDto,
    @Param('id') id: string,
  ): Promise<SaleOrderLine> {
    return await this.saleOrderLineService.updated(
      +id,
      updatedSaleOrderLineDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleOrderLineService.deleted(+id);
  }
}
