import { Injectable } from '@nestjs/common';
import { CreateResCompanyDto } from './dto/create-res_company.dto';
import { UpdateResCompanyDto } from './dto/update-res_company.dto';

@Injectable()
export class ResCompanyService {
  create(createResCompanyDto: CreateResCompanyDto) {
    return 'This action adds a new resCompany';
  }

  findAll() {
    return `This action returns all resCompany`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resCompany`;
  }

  update(id: number, updateResCompanyDto: UpdateResCompanyDto) {
    return `This action updates a #${id} resCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} resCompany`;
  }
}
