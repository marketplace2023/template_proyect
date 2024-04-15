import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountPaymentMethodService } from './account_payment_method.service';
import { CreateAccountPaymentMethodDto } from './dto/create-account_payment_method.dto';
import { UpdateAccountPaymentMethodDto } from './dto/update-account_payment_method.dto';

@Controller('account-payment-method')
export class AccountPaymentMethodController {
  constructor(
    private readonly accountPaymentMethodService: AccountPaymentMethodService,
  ) {}

  @Post()
  create(@Body() createAccountPaymentMethodDto: CreateAccountPaymentMethodDto) {
    return this.accountPaymentMethodService.create(
      createAccountPaymentMethodDto,
    );
  }

  @Get()
  findAll() {
    return this.accountPaymentMethodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountPaymentMethodService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountPaymentMethodDto: UpdateAccountPaymentMethodDto,
  ) {
    return this.accountPaymentMethodService.update(
      +id,
      updateAccountPaymentMethodDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountPaymentMethodService.remove(+id);
  }
}
//definicion-metodos-pago                                                          # (account_payment_method)
//# Configuración de los diferentes métodos de pago disponibles para la empresa.
