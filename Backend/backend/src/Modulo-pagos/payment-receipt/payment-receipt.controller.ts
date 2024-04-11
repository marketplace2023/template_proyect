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
import { PaymentReceiptService } from './payment-receipt.service';
import { PaymentReceipt } from './entities/payment-receipt.entity';
import { CreatedPaymentReceiptDto } from './dto/created-payment-receipt.dto';
import { UpdatedPaymentReceiptDto } from './dto/updated-payment-receipt.dto';
@Controller('payment-receipt')
export class PaymentReceiptController {
  constructor(private readonly paymentReceiptService: PaymentReceiptService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PaymentReceipt[]> {
    return await this.paymentReceiptService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaAaymentReceiptDto: CreatedPaymentReceiptDto,
  ): Promise<PaymentReceipt> {
    return await this.paymentReceiptService.create(createaAaymentReceiptDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PaymentReceipt> {
    return await this.paymentReceiptService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedAaymentReceiptDto: UpdatedPaymentReceiptDto,
    @Param('id') id: string,
  ): Promise<PaymentReceipt> {
    return await this.paymentReceiptService.updated(
      +id,
      updatedAaymentReceiptDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentReceiptService.deleted(+id);
  }
}
