import { Injectable } from '@nestjs/common';
import { CreateAccountPaymentRegisterDto } from './dto/create-account_payment_register.dto';
import { UpdateAccountPaymentRegisterDto } from './dto/update-account_payment_register.dto';

@Injectable()
export class AccountPaymentRegisterService {
  create(createAccountPaymentRegisterDto: CreateAccountPaymentRegisterDto) {
    return 'This action adds a new accountPaymentRegister';
  }

  findAll() {
    return `This action returns all accountPaymentRegister`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountPaymentRegister`;
  }

  update(id: number, updateAccountPaymentRegisterDto: UpdateAccountPaymentRegisterDto) {
    return `This action updates a #${id} accountPaymentRegister`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountPaymentRegister`;
  }
}
