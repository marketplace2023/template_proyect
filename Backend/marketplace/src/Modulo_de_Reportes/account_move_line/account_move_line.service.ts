import { Injectable } from '@nestjs/common';
import { CreateAccountMoveLineDto } from './dto/create-account_move_line.dto';
import { UpdateAccountMoveLineDto } from './dto/update-account_move_line.dto';

@Injectable()
export class AccountMoveLineService {
  create(createAccountMoveLineDto: CreateAccountMoveLineDto) {
    return 'This action adds a new accountMoveLine';
  }

  findAll() {
    return `This action returns all accountMoveLine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountMoveLine`;
  }

  update(id: number, updateAccountMoveLineDto: UpdateAccountMoveLineDto) {
    return `This action updates a #${id} accountMoveLine`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountMoveLine`;
  }
}
