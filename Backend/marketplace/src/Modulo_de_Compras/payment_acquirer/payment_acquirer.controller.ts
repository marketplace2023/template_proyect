import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentAcquirerService } from './payment_acquirer.service';
import { CreatePaymentAcquirerDto } from './dto/create-payment_acquirer.dto';
import { UpdatePaymentAcquirerDto } from './dto/update-payment_acquirer.dto';

@Controller('payment-acquirer')
export class PaymentAcquirerController {
  constructor(private readonly paymentAcquirerService: PaymentAcquirerService) {}

  @Post()
  create(@Body() createPaymentAcquirerDto: CreatePaymentAcquirerDto) {
    return this.paymentAcquirerService.create(createPaymentAcquirerDto);
  }

  @Get()
  findAll() {
    return this.paymentAcquirerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentAcquirerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentAcquirerDto: UpdatePaymentAcquirerDto) {
    return this.paymentAcquirerService.update(+id, updatePaymentAcquirerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentAcquirerService.remove(+id);
  }
}
