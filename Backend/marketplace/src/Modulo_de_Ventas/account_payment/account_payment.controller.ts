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

//gestion-pagos                                                                 # (account_payment)
//# Manejo de pagos recibidos y realizados, incluyendo el registro y la trazabilidad de los mismos.

//seguimiento-pagos                       # (public.account_payment)
//# Seguimiento de pagos realizados.

//conciliacion-financiera                  # (public.account_payment)
//# Proceso de conciliación financiera.

//ajustes-pagos                            # (public.account_payment)
//# Ajustes en los pagos realizados.

//configuracion-metodos-pago               # (public.account_payment)
//# Configuración de métodos de pago.

//personalizacion-formatos-pago            # (public.account_payment)
//# Personalización de formatos de pago.

//seguimiento-estado-pagos                # (public.account_payment)
//# Seguimiento del estado de los pagos.

//analisis-flujo-caja                     # (public.account_payment)
//# Análisis del flujo de caja.
