import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountBankStatementImportService } from './account_bank_statement_import.service';
import { CreateAccountBankStatementImportDto } from './dto/create-account_bank_statement_import.dto';
import { UpdateAccountBankStatementImportDto } from './dto/update-account_bank_statement_import.dto';

@Controller('account-bank-statement-import')
export class AccountBankStatementImportController {
  constructor(
    private readonly accountBankStatementImportService: AccountBankStatementImportService,
  ) {}

  @Post()
  create(
    @Body()
    createAccountBankStatementImportDto: CreateAccountBankStatementImportDto,
  ) {
    return this.accountBankStatementImportService.create(
      createAccountBankStatementImportDto,
    );
  }

  @Get()
  findAll() {
    return this.accountBankStatementImportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountBankStatementImportService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateAccountBankStatementImportDto: UpdateAccountBankStatementImportDto,
  ) {
    return this.accountBankStatementImportService.update(
      +id,
      updateAccountBankStatementImportDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountBankStatementImportService.remove(+id);
  }
}
//importacion-extractos-bancarios                                            # (account_bank_statement_import)
//# Procedimiento para cargar datos de transacciones desde extractos bancarios electrónicos.
