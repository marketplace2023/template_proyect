import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountBankStatementDto } from './create-account_bank_statement.dto';

export class UpdateAccountBankStatementDto extends PartialType(CreateAccountBankStatementDto) {}
