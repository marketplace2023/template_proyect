import { Injectable } from '@nestjs/common';
import { CreateResGroupDto } from './dto/create-res_group.dto';
import { UpdateResGroupDto } from './dto/update-res_group.dto';

@Injectable()
export class ResGroupsService {
  create(createResGroupDto: CreateResGroupDto) {
    return 'This action adds a new resGroup';
  }

  findAll() {
    return `This action returns all resGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resGroup`;
  }

  update(id: number, updateResGroupDto: UpdateResGroupDto) {
    return `This action updates a #${id} resGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} resGroup`;
  }
}
