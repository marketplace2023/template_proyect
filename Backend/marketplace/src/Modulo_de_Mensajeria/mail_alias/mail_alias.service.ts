import { Injectable } from '@nestjs/common';
import { CreateMailAliasDto } from './dto/create-mail_alias.dto';
import { UpdateMailAliasDto } from './dto/update-mail_alias.dto';

@Injectable()
export class MailAliasService {
  create(createMailAliasDto: CreateMailAliasDto) {
    return 'This action adds a new mailAlias';
  }

  findAll() {
    return `This action returns all mailAlias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailAlias`;
  }

  update(id: number, updateMailAliasDto: UpdateMailAliasDto) {
    return `This action updates a #${id} mailAlias`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailAlias`;
  }
}
