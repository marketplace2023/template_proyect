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
import { PaymentService } from './payment.service';
import { Payment } from './entities/payment.entity';
import { CreatedPaymentDto } from './dto/created-payment.dto';
import { UpdatedPaymentDto } from './dto/updated-payment.dto';
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<Payment[]> {
    return await this.paymentService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaPaymentDto: CreatedPaymentDto,
  ): Promise<Payment> {
    return await this.paymentService.create(createaPaymentDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Payment> {
    return await this.paymentService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedPaymentDto: UpdatedPaymentDto,
    @Param('id') id: string,
  ): Promise<Payment> {
    return await this.paymentService.updated(+id, updatedPaymentDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentService.deleted(+id);
  }
}
