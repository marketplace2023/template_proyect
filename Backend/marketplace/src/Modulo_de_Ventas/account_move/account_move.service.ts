import { Injectable } from '@nestjs/common';
import { CreateAccountMoveDto } from './dto/create-account_move.dto';
import { UpdateAccountMoveDto } from './dto/update-account_move.dto';

@Injectable()
export class AccountMoveService {
  create(createAccountMoveDto: CreateAccountMoveDto) {
    return 'This action adds a new accountMove';
  }

  findAll() {
    return `This action returns all accountMove`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountMove`;
  }

  update(id: number, updateAccountMoveDto: UpdateAccountMoveDto) {
    return `This action updates a #${id} accountMove`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountMove`;
  }
}
