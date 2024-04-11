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
import { PaymentTransactionService } from './payment-transaction.service';
import { PaymentTransaction } from './entities/payment-transaction.entity';
import { CreatePaymentTransactionDto } from './dto/create-payment-transaction.dto';
import { UpdatedPaymentTransactionDto } from './dto/updated-payment-transaction.dto';
@Controller('payment-transaction')
export class PaymentTransactionController {
  constructor(
    private readonly paymentTransactionService: PaymentTransactionService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PaymentTransaction[]> {
    return await this.paymentTransactionService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaPaymentTransactionDto: CreatePaymentTransactionDto,
  ): Promise<PaymentTransaction> {
    return await this.paymentTransactionService.create(
      createaPaymentTransactionDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PaymentTransaction> {
    return await this.paymentTransactionService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedPaymentTransactionDto: UpdatedPaymentTransactionDto,
    @Param('id') id: string,
  ): Promise<PaymentTransaction> {
    return await this.paymentTransactionService.updated(
      +id,
      updatedPaymentTransactionDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentTransactionService.deleted(+id);
  }
}
