import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountMoveService } from './account_move.service';
import { CreateAccountMoveDto } from './dto/create-account_move.dto';
import { UpdateAccountMoveDto } from './dto/update-account_move.dto';

@Controller('account-move')
export class AccountMoveController {
  constructor(private readonly accountMoveService: AccountMoveService) {}

  @Post()
  create(@Body() createAccountMoveDto: CreateAccountMoveDto) {
    return this.accountMoveService.create(createAccountMoveDto);
  }

  @Get()
  findAll() {
    return this.accountMoveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountMoveService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountMoveDto: UpdateAccountMoveDto,
  ) {
    return this.accountMoveService.update(+id, updateAccountMoveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountMoveService.remove(+id);
  }
}
//generacion-facturas-ordenes-completadas          # (account.move)
//# Genera facturas automáticamente para las órdenes de venta completadas en el sistema.

//registro-movimientos-contables                                                  # (account_move)
//# Creación y gestión de asientos contables derivados de transacciones financieras.

//analisis-transacciones-financieras                                               # (account_move)
//# Informes sobre las operaciones contables y su impacto en la situación financiera.
