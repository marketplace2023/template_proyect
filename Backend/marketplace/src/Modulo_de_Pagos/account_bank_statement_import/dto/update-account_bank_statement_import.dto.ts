import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountBankStatementImportDto } from './create-account_bank_statement_import.dto';

export class UpdateAccountBankStatementImportDto extends PartialType(CreateAccountBankStatementImportDto) {}
