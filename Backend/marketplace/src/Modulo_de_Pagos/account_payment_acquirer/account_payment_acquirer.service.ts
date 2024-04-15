import { Injectable } from '@nestjs/common';
import { CreateAccountPaymentAcquirerDto } from './dto/create-account_payment_acquirer.dto';
import { UpdateAccountPaymentAcquirerDto } from './dto/update-account_payment_acquirer.dto';

@Injectable()
export class AccountPaymentAcquirerService {
  create(createAccountPaymentAcquirerDto: CreateAccountPaymentAcquirerDto) {
    return 'This action adds a new accountPaymentAcquirer';
  }

  findAll() {
    return `This action returns all accountPaymentAcquirer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountPaymentAcquirer`;
  }

  update(id: number, updateAccountPaymentAcquirerDto: UpdateAccountPaymentAcquirerDto) {
    return `This action updates a #${id} accountPaymentAcquirer`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountPaymentAcquirer`;
  }
}
