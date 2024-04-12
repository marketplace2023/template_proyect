import { Injectable } from '@nestjs/common';
import { CreateResUsersDeletionDto } from './dto/create-res_users_deletion.dto';
import { UpdateResUsersDeletionDto } from './dto/update-res_users_deletion.dto';

@Injectable()
export class ResUsersDeletionService {
  create(createResUsersDeletionDto: CreateResUsersDeletionDto) {
    return 'This action adds a new resUsersDeletion';
  }

  findAll() {
    return `This action returns all resUsersDeletion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resUsersDeletion`;
  }

  update(id: number, updateResUsersDeletionDto: UpdateResUsersDeletionDto) {
    return `This action updates a #${id} resUsersDeletion`;
  }

  remove(id: number) {
    return `This action removes a #${id} resUsersDeletion`;
  }
}
