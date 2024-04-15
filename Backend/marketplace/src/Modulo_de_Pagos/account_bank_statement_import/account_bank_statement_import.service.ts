import { Injectable } from '@nestjs/common';
import { CreateAccountBankStatementImportDto } from './dto/create-account_bank_statement_import.dto';
import { UpdateAccountBankStatementImportDto } from './dto/update-account_bank_statement_import.dto';

@Injectable()
export class AccountBankStatementImportService {
  create(createAccountBankStatementImportDto: CreateAccountBankStatementImportDto) {
    return 'This action adds a new accountBankStatementImport';
  }

  findAll() {
    return `This action returns all accountBankStatementImport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountBankStatementImport`;
  }

  update(id: number, updateAccountBankStatementImportDto: UpdateAccountBankStatementImportDto) {
    return `This action updates a #${id} accountBankStatementImport`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountBankStatementImport`;
  }
}
