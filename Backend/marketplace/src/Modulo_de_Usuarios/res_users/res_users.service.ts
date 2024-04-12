import { Injectable } from '@nestjs/common';
import { CreateResUserDto } from './dto/create-res_user.dto';
import { UpdateResUserDto } from './dto/update-res_user.dto';

@Injectable()
export class ResUsersService {
  create(createResUserDto: CreateResUserDto) {
    return 'This action adds a new resUser';
  }

  findAll() {
    return `This action returns all resUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resUser`;
  }

  update(id: number, updateResUserDto: UpdateResUserDto) {
    return `This action updates a #${id} resUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} resUser`;
  }
}
