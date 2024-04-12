import { Injectable } from '@nestjs/common';
import { CreateResUsersLogDto } from './dto/create-res_users_log.dto';
import { UpdateResUsersLogDto } from './dto/update-res_users_log.dto';

@Injectable()
export class ResUsersLogService {
  create(createResUsersLogDto: CreateResUsersLogDto) {
    return 'This action adds a new resUsersLog';
  }

  findAll() {
    return `This action returns all resUsersLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resUsersLog`;
  }

  update(id: number, updateResUsersLogDto: UpdateResUsersLogDto) {
    return `This action updates a #${id} resUsersLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} resUsersLog`;
  }
}
