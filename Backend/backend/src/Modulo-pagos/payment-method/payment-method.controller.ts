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
import { PaymentMethod } from './entities/payment-method.entity';
import { UpdatedPaymentMethodDto } from './dto/updated-payment-method.dto';
import { CreatedPaymentMethodDto } from './dto/created-payment-method.dto';
import { PaymentMethodService } from './payment-method.service';

@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PaymentMethod[]> {
    return await this.paymentMethodService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaPaymentMethodDto: CreatedPaymentMethodDto,
  ): Promise<PaymentMethod> {
    return await this.paymentMethodService.create(createaPaymentMethodDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PaymentMethod> {
    return await this.paymentMethodService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedPaymentMethodDto: UpdatedPaymentMethodDto,
    @Param('id') id: string,
  ): Promise<PaymentMethod> {
    return await this.paymentMethodService.updated(
      +id,
      updatedPaymentMethodDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentMethodService.deleted(+id);
  }
}
