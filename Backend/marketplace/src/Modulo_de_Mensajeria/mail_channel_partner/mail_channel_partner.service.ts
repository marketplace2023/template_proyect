import { Injectable } from '@nestjs/common';
import { CreateMailChannelPartnerDto } from './dto/create-mail_channel_partner.dto';
import { UpdateMailChannelPartnerDto } from './dto/update-mail_channel_partner.dto';

@Injectable()
export class MailChannelPartnerService {
  create(createMailChannelPartnerDto: CreateMailChannelPartnerDto) {
    return 'This action adds a new mailChannelPartner';
  }

  findAll() {
    return `This action returns all mailChannelPartner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailChannelPartner`;
  }

  update(id: number, updateMailChannelPartnerDto: UpdateMailChannelPartnerDto) {
    return `This action updates a #${id} mailChannelPartner`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailChannelPartner`;
  }
}
