import { Injectable } from '@nestjs/common';
import { CreateMailFollowerDto } from './dto/create-mail_follower.dto';
import { UpdateMailFollowerDto } from './dto/update-mail_follower.dto';

@Injectable()
export class MailFollowersService {
  create(createMailFollowerDto: CreateMailFollowerDto) {
    return 'This action adds a new mailFollower';
  }

  findAll() {
    return `This action returns all mailFollowers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailFollower`;
  }

  update(id: number, updateMailFollowerDto: UpdateMailFollowerDto) {
    return `This action updates a #${id} mailFollower`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailFollower`;
  }
}
