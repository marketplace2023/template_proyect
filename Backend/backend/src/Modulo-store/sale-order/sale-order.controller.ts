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
import { SaleOrderService } from './sale-order.service';
import { SaleOrder } from './entities/sale-order.entity';
import { CreateSaleOrderDto } from './dto/created-sale-order.dto';
import { UpdatedSaleOrderDto } from './dto/updated-sale-order.dto';
@Controller('sale-order')
export class SaleOrderController {
  constructor(private readonly saleOrderService: SaleOrderService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleOrder[]> {
    return await this.saleOrderService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSaleOrderDto: CreateSaleOrderDto,
  ): Promise<SaleOrder> {
    return await this.saleOrderService.create(createaSaleOrderDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleOrder> {
    return await this.saleOrderService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSaleOrderDto: UpdatedSaleOrderDto,
    @Param('id') id: string,
  ): Promise<SaleOrder> {
    return await this.saleOrderService.updated(+id, updatedSaleOrderDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleOrderService.deleted(+id);
  }
}
