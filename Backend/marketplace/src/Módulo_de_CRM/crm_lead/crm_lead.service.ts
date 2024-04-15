import { Injectable } from '@nestjs/common';
import { CreateCrmLeadDto } from './dto/create-crm_lead.dto';
import { UpdateCrmLeadDto } from './dto/update-crm_lead.dto';

@Injectable()
export class CrmLeadService {
  create(createCrmLeadDto: CreateCrmLeadDto) {
    return 'This action adds a new crmLead';
  }

  findAll() {
    return `This action returns all crmLead`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crmLead`;
  }

  update(id: number, updateCrmLeadDto: UpdateCrmLeadDto) {
    return `This action updates a #${id} crmLead`;
  }

  remove(id: number) {
    return `This action removes a #${id} crmLead`;
  }
}
