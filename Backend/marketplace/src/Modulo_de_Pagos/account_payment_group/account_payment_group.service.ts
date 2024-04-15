import { Injectable } from '@nestjs/common';
import { CreateAccountPaymentGroupDto } from './dto/create-account_payment_group.dto';
import { UpdateAccountPaymentGroupDto } from './dto/update-account_payment_group.dto';

@Injectable()
export class AccountPaymentGroupService {
  create(createAccountPaymentGroupDto: CreateAccountPaymentGroupDto) {
    return 'This action adds a new accountPaymentGroup';
  }

  findAll() {
    return `This action returns all accountPaymentGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountPaymentGroup`;
  }

  update(id: number, updateAccountPaymentGroupDto: UpdateAccountPaymentGroupDto) {
    return `This action updates a #${id} accountPaymentGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountPaymentGroup`;
  }
}
