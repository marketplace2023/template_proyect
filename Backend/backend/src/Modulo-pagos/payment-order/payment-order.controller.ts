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
import { PaymentOrder } from './entities/payment-order.entity';
import { CreatedPaymentOrderDto } from './dto/created-payment-order.dto';
import { UpdatedPaymentOrderDto } from './dto/updated-payment-order.dto';
import { PaymentOrderService } from './payment-order.service';
@Controller('payment-order')
export class PaymentOrderController {
  constructor(private readonly paymentOrderService: PaymentOrderService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PaymentOrder[]> {
    return await this.paymentOrderService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaPaymentOrderDto: CreatedPaymentOrderDto,
  ): Promise<PaymentOrder> {
    return await this.paymentOrderService.create(createaPaymentOrderDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PaymentOrder> {
    return await this.paymentOrderService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedPaymentOrderDto: UpdatedPaymentOrderDto,
    @Param('id') id: string,
  ): Promise<PaymentOrder> {
    return await this.paymentOrderService.updated(+id, updatedPaymentOrderDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentOrderService.deleted(+id);
  }
}
