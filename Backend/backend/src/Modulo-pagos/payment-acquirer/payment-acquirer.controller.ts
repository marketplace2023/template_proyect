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
import { PaymentAcquirerService } from './payment-acquirer.service';
import { PaymentAcquirer } from './entities/payment-acquirer.entity';
import { CreatedPaymentAcquirerDto } from './dto/created-payment-acquirer.dto';
import { UpdatedPaymentAcquirerDto } from './dto/updated-payment-acquirer.dto';

@Controller('payment-acquirer')
export class PaymentAcquirerController {
  constructor(
    private readonly paymentAcquirerService: PaymentAcquirerService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PaymentAcquirer[]> {
    return await this.paymentAcquirerService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaPaymentAcquirerDto: CreatedPaymentAcquirerDto,
  ): Promise<PaymentAcquirer> {
    return await this.paymentAcquirerService.create(createaPaymentAcquirerDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PaymentAcquirer> {
    return await this.paymentAcquirerService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedPaymentAcquirerDto: UpdatedPaymentAcquirerDto,
    @Param('id') id: string,
  ): Promise<PaymentAcquirer> {
    return await this.paymentAcquirerService.updated(
      +id,
      updatedPaymentAcquirerDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentAcquirerService.deleted(+id);
  }
}
