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
import { PaymentIconService } from './payment-icon.service';
import { PaymentIcon } from './entities/payment-icon.entity';
import { UpdatedPaymentIconDto } from './dto/updated-payment-icon.dto';
import { CreatePaymentIconDto } from './dto/create-payment-icon.dto';
@Controller('payment-icon')
export class PaymentIconController {
  constructor(private readonly paymentIconService: PaymentIconService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PaymentIcon[]> {
    return await this.paymentIconService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaPaymentIconDto: CreatePaymentIconDto,
  ): Promise<PaymentIcon> {
    return await this.paymentIconService.create(createaPaymentIconDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PaymentIcon> {
    return await this.paymentIconService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedPaymentIconDto: UpdatedPaymentIconDto,
    @Param('id') id: string,
  ): Promise<PaymentIcon> {
    return await this.paymentIconService.updated(+id, updatedPaymentIconDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentIconService.deleted(+id);
  }
}
