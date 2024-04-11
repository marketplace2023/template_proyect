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
import { SaleOrderPaymentService } from './sale-order-payment.service';
import { SaleOrderPayment } from './entities/sale-order-payment.entity';
import { CreateSaleOrderPaymentDto } from './dto/created-sale-order-payment.dto';
import { UpdatedSaleOrderPaymentDto } from './dto/updated-sale-order-payment.dto';
@Controller('sale-order-payment')
export class SaleOrderPaymentController {
  constructor(
    private readonly saleOrderPaymentService: SaleOrderPaymentService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleOrderPayment[]> {
    return await this.saleOrderPaymentService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaSaleOrderPaymentDto: CreateSaleOrderPaymentDto,
  ): Promise<SaleOrderPayment> {
    return await this.saleOrderPaymentService.create(
      createaSaleOrderPaymentDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleOrderPayment> {
    return await this.saleOrderPaymentService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedSaleOrderPaymentDto: UpdatedSaleOrderPaymentDto,
    @Param('id') id: string,
  ): Promise<SaleOrderPayment> {
    return await this.saleOrderPaymentService.updated(
      +id,
      updatedSaleOrderPaymentDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleOrderPaymentService.deleted(+id);
  }
}
