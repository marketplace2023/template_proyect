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
//generacion-informes-ventas-ingresos-inventario            # (sale.report, account.move.line, stock.quant, etc.)
//# Procesa los datos para generar informes relacionados con ventas, ingresos e inventario.
