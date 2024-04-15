import { Injectable } from '@nestjs/common';
import { CreateCrmTeamDto } from './dto/create-crm_team.dto';
import { UpdateCrmTeamDto } from './dto/update-crm_team.dto';

@Injectable()
export class CrmTeamService {
  create(createCrmTeamDto: CreateCrmTeamDto) {
    return 'This action adds a new crmTeam';
  }

  findAll() {
    return `This action returns all crmTeam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crmTeam`;
  }

  update(id: number, updateCrmTeamDto: UpdateCrmTeamDto) {
    return `This action updates a #${id} crmTeam`;
  }

  remove(id: number) {
    return `This action removes a #${id} crmTeam`;
  }
}
