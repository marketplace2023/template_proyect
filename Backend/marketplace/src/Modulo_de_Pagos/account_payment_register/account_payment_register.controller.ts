import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountPaymentRegisterService } from './account_payment_register.service';
import { CreateAccountPaymentRegisterDto } from './dto/create-account_payment_register.dto';
import { UpdateAccountPaymentRegisterDto } from './dto/update-account_payment_register.dto';

@Controller('account-payment-register')
export class AccountPaymentRegisterController {
  constructor(
    private readonly accountPaymentRegisterService: AccountPaymentRegisterService,
  ) {}

  @Post()
  create(
    @Body() createAccountPaymentRegisterDto: CreateAccountPaymentRegisterDto,
  ) {
    return this.accountPaymentRegisterService.create(
      createAccountPaymentRegisterDto,
    );
  }

  @Get()
  findAll() {
    return this.accountPaymentRegisterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountPaymentRegisterService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountPaymentRegisterDto: UpdateAccountPaymentRegisterDto,
  ) {
    return this.accountPaymentRegisterService.update(
      +id,
      updateAccountPaymentRegisterDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountPaymentRegisterService.remove(+id);
  }
}
//registro-pagos-manuales                                                         # (account_payment_register)
//# Proceso para la inclusión manual de pagos en el sistema, aplicable a métodos no electrónicos.
