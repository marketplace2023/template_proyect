import { Injectable } from '@nestjs/common';
import { CreateAccountPaymentDto } from './dto/create-account_payment.dto';
import { UpdateAccountPaymentDto } from './dto/update-account_payment.dto';

@Injectable()
export class AccountPaymentService {
  create(createAccountPaymentDto: CreateAccountPaymentDto) {
    return 'This action adds a new accountPayment';
  }

  findAll() {
    return `This action returns all accountPayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountPayment`;
  }

  update(id: number, updateAccountPaymentDto: UpdateAccountPaymentDto) {
    return `This action updates a #${id} accountPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountPayment`;
  }
}
