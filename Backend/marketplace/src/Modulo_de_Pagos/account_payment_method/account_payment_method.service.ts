import { Injectable } from '@nestjs/common';
import { CreateAccountPaymentMethodDto } from './dto/create-account_payment_method.dto';
import { UpdateAccountPaymentMethodDto } from './dto/update-account_payment_method.dto';

@Injectable()
export class AccountPaymentMethodService {
  create(createAccountPaymentMethodDto: CreateAccountPaymentMethodDto) {
    return 'This action adds a new accountPaymentMethod';
  }

  findAll() {
    return `This action returns all accountPaymentMethod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountPaymentMethod`;
  }

  update(id: number, updateAccountPaymentMethodDto: UpdateAccountPaymentMethodDto) {
    return `This action updates a #${id} accountPaymentMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountPaymentMethod`;
  }
}
