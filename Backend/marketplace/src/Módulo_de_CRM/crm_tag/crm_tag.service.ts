import { Injectable } from '@nestjs/common';
import { CreateCrmTagDto } from './dto/create-crm_tag.dto';
import { UpdateCrmTagDto } from './dto/update-crm_tag.dto';

@Injectable()
export class CrmTagService {
  create(createCrmTagDto: CreateCrmTagDto) {
    return 'This action adds a new crmTag';
  }

  findAll() {
    return `This action returns all crmTag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crmTag`;
  }

  update(id: number, updateCrmTagDto: UpdateCrmTagDto) {
    return `This action updates a #${id} crmTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} crmTag`;
  }
}
