import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountPaymentAcquirerService } from './account_payment_acquirer.service';
import { CreateAccountPaymentAcquirerDto } from './dto/create-account_payment_acquirer.dto';
import { UpdateAccountPaymentAcquirerDto } from './dto/update-account_payment_acquirer.dto';

@Controller('account-payment-acquirer')
export class AccountPaymentAcquirerController {
  constructor(
    private readonly accountPaymentAcquirerService: AccountPaymentAcquirerService,
  ) {}

  @Post()
  create(
    @Body() createAccountPaymentAcquirerDto: CreateAccountPaymentAcquirerDto,
  ) {
    return this.accountPaymentAcquirerService.create(
      createAccountPaymentAcquirerDto,
    );
  }

  @Get()
  findAll() {
    return this.accountPaymentAcquirerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountPaymentAcquirerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountPaymentAcquirerDto: UpdateAccountPaymentAcquirerDto,
  ) {
    return this.accountPaymentAcquirerService.update(
      +id,
      updateAccountPaymentAcquirerDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountPaymentAcquirerService.remove(+id);
  }
}
//configuracion-pasarelas-pago                                                  # (account_payment_acquirer)
//# Establecimiento de las integraciones con servicios de procesamiento de pagos externos.

//efectividad-pasarelas-pago                                                      # (account_payment_acquirer)
//# Evaluación del rendimiento y costos asociados con las pasarelas de pago integradas.
