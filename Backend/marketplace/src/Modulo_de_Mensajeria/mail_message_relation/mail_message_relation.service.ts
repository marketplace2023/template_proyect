import { Injectable } from '@nestjs/common';
import { CreateMailMessageRelationDto } from './dto/create-mail_message_relation.dto';
import { UpdateMailMessageRelationDto } from './dto/update-mail_message_relation.dto';

@Injectable()
export class MailMessageRelationService {
  create(createMailMessageRelationDto: CreateMailMessageRelationDto) {
    return 'This action adds a new mailMessageRelation';
  }

  findAll() {
    return `This action returns all mailMessageRelation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailMessageRelation`;
  }

  update(id: number, updateMailMessageRelationDto: UpdateMailMessageRelationDto) {
    return `This action updates a #${id} mailMessageRelation`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailMessageRelation`;
  }
}
