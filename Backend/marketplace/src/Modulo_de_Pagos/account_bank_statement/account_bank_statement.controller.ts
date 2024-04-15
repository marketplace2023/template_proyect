import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountBankStatementService } from './account_bank_statement.service';
import { CreateAccountBankStatementDto } from './dto/create-account_bank_statement.dto';
import { UpdateAccountBankStatementDto } from './dto/update-account_bank_statement.dto';

@Controller('account-bank-statement')
export class AccountBankStatementController {
  constructor(
    private readonly accountBankStatementService: AccountBankStatementService,
  ) {}

  @Post()
  create(@Body() createAccountBankStatementDto: CreateAccountBankStatementDto) {
    return this.accountBankStatementService.create(
      createAccountBankStatementDto,
    );
  }

  @Get()
  findAll() {
    return this.accountBankStatementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountBankStatementService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountBankStatementDto: UpdateAccountBankStatementDto,
  ) {
    return this.accountBankStatementService.update(
      +id,
      updateAccountBankStatementDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountBankStatementService.remove(+id);
  }
}
//conciliacion-bancaria                                                         # (account_bank_statement)
//# Proceso de verificación y ajuste entre los movimientos bancarios y los registros contables.

//resumen-extractos-bancarios                                                     # (account_bank_statement)
//# Compilación de la información contenida en los extractos bancarios para su análisis.
