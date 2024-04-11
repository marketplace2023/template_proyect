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
import { PaymentProviderService } from './payment-provider.service';
import { PaymentProvider } from './entities/payment-provider.entity';
import { CreatePaymentProviderDto } from './dto/create-payment-provider.dto';
import { UpdatedPaymentProviderDto } from './dto/updated-payment-provider.dto';
@Controller('payment-provider')
export class PaymentProviderController {
  constructor(
    private readonly paymentProviderService: PaymentProviderService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PaymentProvider[]> {
    return await this.paymentProviderService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaPaymentProviderDto: CreatePaymentProviderDto,
  ): Promise<PaymentProvider> {
    return await this.paymentProviderService.create(createaPaymentProviderDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PaymentProvider> {
    return await this.paymentProviderService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedPaymentProviderDto: UpdatedPaymentProviderDto,
    @Param('id') id: string,
  ): Promise<PaymentProvider> {
    return await this.paymentProviderService.updated(
      +id,
      updatedPaymentProviderDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentProviderService.deleted(+id);
  }
}
