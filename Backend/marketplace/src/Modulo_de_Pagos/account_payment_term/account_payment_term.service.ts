import { Injectable } from '@nestjs/common';
import { CreateAccountPaymentTermDto } from './dto/create-account_payment_term.dto';
import { UpdateAccountPaymentTermDto } from './dto/update-account_payment_term.dto';

@Injectable()
export class AccountPaymentTermService {
  create(createAccountPaymentTermDto: CreateAccountPaymentTermDto) {
    return 'This action adds a new accountPaymentTerm';
  }

  findAll() {
    return `This action returns all accountPaymentTerm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountPaymentTerm`;
  }

  update(id: number, updateAccountPaymentTermDto: UpdateAccountPaymentTermDto) {
    return `This action updates a #${id} accountPaymentTerm`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountPaymentTerm`;
  }
}
