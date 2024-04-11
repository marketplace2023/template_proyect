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
import { PaymentLine } from './entities/payment-line.entity';
import { CreatedPaymentLineDto } from './dto/created-payment-line.dto';
import { PaymentLineService } from './payment-line.service';
import { UpdatedPaymentLineDto } from './dto/updated-payment-line.dto';

@Controller('payment-line')
export class PaymentLineController {
  constructor(private readonly paymentLineService: PaymentLineService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PaymentLine[]> {
    return await this.paymentLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaPaymentLineDto: CreatedPaymentLineDto,
  ): Promise<PaymentLine> {
    return await this.paymentLineService.create(createaPaymentLineDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PaymentLine> {
    return await this.paymentLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedPaymentLineDto: UpdatedPaymentLineDto,
    @Param('id') id: string,
  ): Promise<PaymentLine> {
    return await this.paymentLineService.updated(+id, updatedPaymentLineDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentLineService.deleted(+id);
  }
}
