import { Injectable } from '@nestjs/common';
import { CreateAccountBankStatementDto } from './dto/create-account_bank_statement.dto';
import { UpdateAccountBankStatementDto } from './dto/update-account_bank_statement.dto';

@Injectable()
export class AccountBankStatementService {
  create(createAccountBankStatementDto: CreateAccountBankStatementDto) {
    return 'This action adds a new accountBankStatement';
  }

  findAll() {
    return `This action returns all accountBankStatement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountBankStatement`;
  }

  update(id: number, updateAccountBankStatementDto: UpdateAccountBankStatementDto) {
    return `This action updates a #${id} accountBankStatement`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountBankStatement`;
  }
}
