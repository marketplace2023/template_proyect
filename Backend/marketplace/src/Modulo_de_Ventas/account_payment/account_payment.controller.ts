import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountPaymentService } from './account_payment.service';
import { CreateAccountPaymentDto } from './dto/create-account_payment.dto';
import { UpdateAccountPaymentDto } from './dto/update-account_payment.dto';

@Controller('account-payment')
export class AccountPaymentController {
  constructor(private readonly accountPaymentService: AccountPaymentService) {}

  @Post()
  create(@Body() createAccountPaymentDto: CreateAccountPaymentDto) {
    return this.accountPaymentService.create(createAccountPaymentDto);
  }

  @Get()
  findAll() {
    return this.accountPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountPaymentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountPaymentDto: UpdateAccountPaymentDto,
  ) {
    return this.accountPaymentService.update(+id, updateAccountPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountPaymentService.remove(+id);
  }
}

//analisis-ingresos-tipo-pago                     # (account.payment)
//# Realiza un análisis de los ingresos según el tipo de pago utilizado en las órdenes de venta.
