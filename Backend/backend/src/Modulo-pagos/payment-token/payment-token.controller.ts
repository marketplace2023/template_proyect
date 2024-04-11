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
import { PaymentTokenService } from './payment-token.service';
import { PaymentToken } from './entities/payment-token.entity';
import { CreatePaymentTokenDto } from './dto/create-payment-token.dto';
import { UpdatedPaymentTokenDto } from './dto/updated-payment-token.dto';
@Controller('payment-token')
export class PaymentTokenController {
  constructor(private readonly paymentTokenService: PaymentTokenService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PaymentToken[]> {
    return await this.paymentTokenService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaPaymentTokenDto: CreatePaymentTokenDto,
  ): Promise<PaymentToken> {
    return await this.paymentTokenService.create(createaPaymentTokenDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PaymentToken> {
    return await this.paymentTokenService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedPaymentTokenDto: UpdatedPaymentTokenDto,
    @Param('id') id: string,
  ): Promise<PaymentToken> {
    return await this.paymentTokenService.updated(+id, updatedPaymentTokenDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentTokenService.deleted(+id);
  }
}
