import { Injectable } from '@nestjs/common';
import { CreateCrmStageDto } from './dto/create-crm_stage.dto';
import { UpdateCrmStageDto } from './dto/update-crm_stage.dto';

@Injectable()
export class CrmStageService {
  create(createCrmStageDto: CreateCrmStageDto) {
    return 'This action adds a new crmStage';
  }

  findAll() {
    return `This action returns all crmStage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crmStage`;
  }

  update(id: number, updateCrmStageDto: UpdateCrmStageDto) {
    return `This action updates a #${id} crmStage`;
  }

  remove(id: number) {
    return `This action removes a #${id} crmStage`;
  }
}
