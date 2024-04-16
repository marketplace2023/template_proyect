import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountMoveLineService } from './account_move_line.service';
import { CreateAccountMoveLineDto } from './dto/create-account_move_line.dto';
import { UpdateAccountMoveLineDto } from './dto/update-account_move_line.dto';

@Controller('account-move-line')
export class AccountMoveLineController {
  constructor(
    private readonly accountMoveLineService: AccountMoveLineService,
  ) {}

  @Post()
  create(@Body() createAccountMoveLineDto: CreateAccountMoveLineDto) {
    return this.accountMoveLineService.create(createAccountMoveLineDto);
  }

  @Get()
  findAll() {
    return this.accountMoveLineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountMoveLineService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountMoveLineDto: UpdateAccountMoveLineDto,
  ) {
    return this.accountMoveLineService.update(+id, updateAccountMoveLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountMoveLineService.remove(+id);
  }
}
//gestion-asientos-contables               # (public.account_move_line)
//# Gestión de asientos contables.

//analisis-componentes-asiento             # (public.account_move_line)
//# Análisis de los componentes de un asiento contable.

//personalizacion-lineas-asiento           # (public.account_move_line)
//# Personalización de las líneas de asiento contable.

//detalle-componentes-asiento             # (public.account_move_line)
//# Detalle de los componentes de un asiento contable.

//analisis-detalles-transacciones         # (public.account_move_line)
//# Análisis de los detalles de las transacciones.
