import { Injectable } from '@nestjs/common';
import { CreateResPartnerDto } from './dto/create-res_partner.dto';
import { UpdateResPartnerDto } from './dto/update-res_partner.dto';

@Injectable()
export class ResPartnerService {
  create(createResPartnerDto: CreateResPartnerDto) {
    return 'This action adds a new resPartner';
  }

  findAll() {
    return `This action returns all resPartner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resPartner`;
  }

  update(id: number, updateResPartnerDto: UpdateResPartnerDto) {
    return `This action updates a #${id} resPartner`;
  }

  remove(id: number) {
    return `This action removes a #${id} resPartner`;
  }
}
