import { Injectable } from '@nestjs/common';
import { CreateAccountInvoiceDto } from './dto/create-account_invoice.dto';
import { UpdateAccountInvoiceDto } from './dto/update-account_invoice.dto';

@Injectable()
export class AccountInvoiceService {
  create(createAccountInvoiceDto: CreateAccountInvoiceDto) {
    return 'This action adds a new accountInvoice';
  }

  findAll() {
    return `This action returns all accountInvoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountInvoice`;
  }

  update(id: number, updateAccountInvoiceDto: UpdateAccountInvoiceDto) {
    return `This action updates a #${id} accountInvoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountInvoice`;
  }
}
