import { Injectable } from '@nestjs/common';
import { CreateAccountInvoiceTransactionRelDto } from './dto/create-account_invoice_transaction_rel.dto';
import { UpdateAccountInvoiceTransactionRelDto } from './dto/update-account_invoice_transaction_rel.dto';

@Injectable()
export class AccountInvoiceTransactionRelService {
  create(createAccountInvoiceTransactionRelDto: CreateAccountInvoiceTransactionRelDto) {
    return 'This action adds a new accountInvoiceTransactionRel';
  }

  findAll() {
    return `This action returns all accountInvoiceTransactionRel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountInvoiceTransactionRel`;
  }

  update(id: number, updateAccountInvoiceTransactionRelDto: UpdateAccountInvoiceTransactionRelDto) {
    return `This action updates a #${id} accountInvoiceTransactionRel`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountInvoiceTransactionRel`;
  }
}
