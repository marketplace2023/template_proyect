import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountPaymentTermService } from './account_payment_term.service';
import { CreateAccountPaymentTermDto } from './dto/create-account_payment_term.dto';
import { UpdateAccountPaymentTermDto } from './dto/update-account_payment_term.dto';

@Controller('account-payment-term')
export class AccountPaymentTermController {
  constructor(
    private readonly accountPaymentTermService: AccountPaymentTermService,
  ) {}

  @Post()
  create(@Body() createAccountPaymentTermDto: CreateAccountPaymentTermDto) {
    return this.accountPaymentTermService.create(createAccountPaymentTermDto);
  }

  @Get()
  findAll() {
    return this.accountPaymentTermService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountPaymentTermService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountPaymentTermDto: UpdateAccountPaymentTermDto,
  ) {
    return this.accountPaymentTermService.update(
      +id,
      updateAccountPaymentTermDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountPaymentTermService.remove(+id);
  }
}
//configuracion-terminos-pago                                                       # (account_payment_term)
//# Establecimiento de las condiciones bajo las cuales se aceptan los pagos de clientes.
